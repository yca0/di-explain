import { getClient } from './db'

class Worker {
    run(): string {
        return getClient().query('foo');
    }
}

export default new Worker();
