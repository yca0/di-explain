import { WorkerClientImpl } from '../db';

describe('Test worker', () => {
    test('worker', () => {
        class MyClient {
            query(ql: string): string {
                return `result of ${ql}`;
            }
        }
        const client = new WorkerClientImpl(new MyClient());
        expect(client.workerQuery()).toEqual('result of foo');
    });
});
