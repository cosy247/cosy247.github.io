export default {
    async onPrepared(app) {
        console.log(111111111111111);
        await app.writeTemp('foo.js', `export const foo = {a:1}`);
    },
    ready() {
        console.log(123);
    },
};
