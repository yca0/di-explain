import "reflect-metadata";

import { Server } from '../server';
import { HttpServer, HandlerFn } from '../createServer';
import { Response, Handler } from '../handlers';

describe('Test Server', () => {
    test('Server', async () => {
        let p: number;
        let h: string;
        let cb: Function;
        let hnd: HandlerFn;
        class MyServer implements HttpServer {
            listen(port: number, host: string, callback: Function) {
                p = port;
                h = host;
                cb = callback;
                cb();
            }
        }

        const myCreateServer = (fn: HandlerFn): HttpServer => {
            hnd = fn;
            return new MyServer();
        };

        class MyHandler implements Handler {
            async root(_req: any, res: Response): Promise<void> {
                res.statusCode = 200;
            }
        }

        new Server(myCreateServer, new MyHandler());
        const res = {
            statusCode: 0,
            setHeader: function (header: string, val: string) {},
            end: function (body: string) {},
        };
        await hnd(null, res);
        expect(res.statusCode).toBe(200);
        expect(p).toBe(5000);
        expect(h).toEqual('0.0.0.0');
    });
});
