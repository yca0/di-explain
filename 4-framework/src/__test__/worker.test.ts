import "reflect-metadata";

import { WorkerImpl } from '../worker';

describe('Test worker', () => {
    test('worker', () => {
        class MyClient {
            workerQuery(): string {
                return 'result';
            }
        }
        const worker = new WorkerImpl(new MyClient());
        expect(worker.run()).toEqual('result');
    });
});
