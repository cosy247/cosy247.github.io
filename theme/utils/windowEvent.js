import getType from '.';

const windowEvents = {};

export default {
    add(eventName, eventCallback) {
        if (getType(eventName) !== 'String' || getType(eventCallback) !== 'Function') {
            return;
        }
        if (windowEvents.hasOwnProperty(eventName)) {
            windowEvents[eventName].add(eventCallback);
        } else {
            windowEvents[eventName] = new Set();
            windowEvents[eventName].add(eventCallback);
            window.addEventListener(eventName, (e) => {
                windowEvents[eventName].forEach((callback) => callback(e));
            });
        }
    },
    remove(eventName, eventCallback) {
        if (getType(eventName) !== 'String' || getType(eventCallback) !== 'Function') {
            return;
        }
        if (windowEvents.hasOwnProperty(eventName)) {
            windowEvents[eventName].delete(eventCallback);
        }
    },
};
