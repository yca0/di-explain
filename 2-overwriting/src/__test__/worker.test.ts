import worker from '../worker';
import { setClient } from '../db';

describe('Test worker', () => {
    test('worker', () => {
        class MyClient {
            query(ql: string): string {
                return `result of ${ql}`;
            }
        }
        setClient(new MyClient());
        expect(worker.run()).toEqual('result of foo');
        setClient(null);
    });
});
