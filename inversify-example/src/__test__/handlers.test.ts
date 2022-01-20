import "reflect-metadata";

import { HandlerImpl } from '../handlers';

describe('Test handlers', () => {
    test('root', async () => {
        const myReadFile = (path: string, opts: any) => Promise.resolve('TEST!!');
        const res = {
            statusCode: 0,
            header: '',
            headerVal: '',
            body: '',
            setHeader: function (header: string, val: string) {
                this.header = header;
                this.headerVal = val;
            },
            end: function (body: string) {
                this.body = body;
            },
        };
        const h = new HandlerImpl(myReadFile);
        await h.root(null, res);
        expect(res.statusCode).toBe(200);
        expect(res.header).toEqual('Content-Type');
        expect(res.headerVal).toEqual('text/plain');
        expect(res.body).toEqual('TEST!!');
    });
});
