import "reflect-metadata";

import { WorkerClientImpl } from '../db';

describe('Test worker', () => {
    test('worker', () => {
        class MyClient {
            uri: string
            constructor(uri: string) {
                this.uri = uri;
            }
            query(ql: string): string {
                return `result of ${ql}`;
            }
        }
        const client = new WorkerClientImpl(MyClient);
        expect(client.workerQuery()).toEqual('result of foo');
    });
});
