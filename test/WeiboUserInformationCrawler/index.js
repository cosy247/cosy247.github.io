const axios = require('axios');
const fs = require('fs');
const XLSX = require('xlsx');

const OUTPUT_FILE_NAME = 'output';
const DEPTH_Of_TRAVERSAL = 1;
const ROOT_UID = 6118779505;
const COOKIE =
    'XSRF-TOKEN=MTnk2kmlUBADJNSoW8lX4OGF; SSOLoginState=1703954359; SUB=_2A25IlDfnDeThGeBG7VQW9CbLzjmIHXVr6DUvrDV8PUJbkNB-LWjukW1NRhaMHhKIIZquvj0ghg9Becynup-wQzjQ; SUBP=0033WrSXqPxfM725Ws9jqgMF55529P9D9WW1FRzimZ2p145Y3bvwyGuq5NHD95Qc1hqcS0BRS0-fWs4DqcjMi--NiK.Xi-2Ri--ciKnRi-zNSoncSoMX1hMfSBtt; PC_TOKEN=c9006248d2; WBPSESS=Yjdb9gJzHQEyzSrT1OihdlNGVxlWwKTKfg5sBqpaSRei0QUyUVk_MFhX52CU7Y39ZzcTEKKIh3WdQo9b-dULinJAtXAt1SMgdEm44sSYHXcfO1B2qpaL6knBb6qqjgkRb1WzvNhlI8ypumT9VjUkqw==';

const errorMap = {};
const getCount = { total: 0, success: 0, fail: 0 };
let logCount = 0;

function log() {
    process.stdout.write(`\r${['.....', 'O....', '.O...', '..O..', '...O.', '....O'][++logCount % 6]}总量: ${getCount.success + getCount.fail}/${getCount.total}🤖🤖🤖success: ${getCount.success}🤖🤖🤖fail: ${getCount.fail}`);
}

function sendGet(url, params) {
    log();
    return new Promise((resolve, reject) => {
        axios
            .get(`${url}?${new URLSearchParams(params)}`, {
                headers: {
                    Cookie: COOKIE,
                },
            })
            .then((data) => {
                if (data?.data?.ok === 1) {
                    getCount.success++;
                    resolve(data);
                } else {
                    getCount.fail++;
                    const cache = [];
                    const dataString = JSON.stringify(data, function (key, value) {
                        if (typeof value === 'object' && value !== null) {
                            if (cache.indexOf(value) !== -1) {
                                return;
                            }
                            cache.push(value);
                        }
                        return value;
                    });
                    if (!errorMap[dataString]) errorMap[dataString] = 0;
                    errorMap[dataString]++;
                    log();
                    resolve();
                }
            })
            .catch((data) => {
                getCount.fail++;
                console.log(data);
                log();
                resolve();
            });
    });
}

// 获取用户信息
function getUserInfo(uid, callback) {
    sendGet(`https://weibo.com/ajax/profile/info`, {
        uid,
    }).then((data) => {
        callback(data.data.data.user);
    });
}

// 获取关注列表
function getAttentions(uid, callback, page = 1) {
    sendGet(`https://weibo.com/ajax/friendships/friends`, {
        page,
        uid,
    }).then((data) => {
        if (data) {
            const { next_cursor, users } = data;
            callback(users);
            next_cursor && getAttentions(uid, callback, page + 1);
        }
    });
}

// 获取粉丝列表
function getFans(uid, callback, page = 1) {
    sendGet(`https://weibo.com/ajax/friendships/friends`, {
        relate: 'fans',
        page,
        uid,
        type: 'all',
        newFollowerCount: 0,
    }).then((data) => {
        if (data) {
            const { next_cursor, users } = data.data;
            callback(users);
            next_cursor && getFans(uid, callback, page + 1);
        }
    });
}

function getUserList(userList, deep = 0) {
    const { fans, attentions } = userList[deep];
    if (!userList[deep + 1]) {
        userList[deep + 1] = { fans: [], attentions: [] };
    }
    const nextUsers = userList[deep + 1];
    fans.forEach((item) => {
        getFans(item.id, (fans) => {
            getCount.total += fans.length;
            nextUsers.fans.push(...fans);
            if (deep < DEPTH_Of_TRAVERSAL) getUserList(userList, deep + 1);
            else if (getCount.total == getCount.success + getCount.fail) writeInfoXlsx(userList);
        });
    });
    attentions.forEach((item) => {
        getAttentions(item.id, (attentions) => {
            getCount.total += attentions.length;
            nextUsers.push(...attentions);
            if (deep < DEPTH_Of_TRAVERSAL) getUserList(userList, deep + 1);
            else if (getCount.total == getCount.success + getCount.fail) writeInfoXlsx(userList);
        });
    });
}

function writeInfoXlsx(userList) {
    // 生成错误日志文件
    fs.writeFile('error.log', JSON.stringify(errorMap), (error) => {
        if (error) {
            console.error('写入文件时发生错误:', error);
        } else {
            console.log('文件写入成功:');
        }
    });

    // 生成表格数据
    const userData = userList.reduce((userData, { fans, attentions }) => {
        userData.push(...fans, ...attentions);
        return userData;
    }, []);
    const xlsxData = [Object.keys(userData[0])];
    userData.forEach((item) => {
        xlsxData.push(xlsxData[0].map((key) => item[key]));
    });

    // 生成表格文件
    const ws = XLSX.utils.aoa_to_sheet(xlsxData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, `${OUTPUT_FILE_NAME}.xlsx`, { bookType: 'xlsx', bookSST: false, type: 'file' });
    console.log(`Table file generated: ${OUTPUT_FILE_NAME}.xlsx`);
}

// 执行
(() => {
    // 获取起始用户信息
    try {
        getUserInfo(ROOT_UID, (data) => {
            const userData = [{ fans: [data], attentions: [] }];
            getUserList(userData); // 生成错误日志文件
        });
    } catch (error) {
        console.log(error);
    }
})();
