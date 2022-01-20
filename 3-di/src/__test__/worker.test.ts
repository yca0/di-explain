import { Worker } from '../worker';

describe('Test worker', () => {
    test('worker', () => {
        class MyClient {
            workerQuery(): string {
                return 'result';
            }
        }
        const worker = new Worker(new MyClient());
        expect(worker.run()).toEqual('result');
    });
});
