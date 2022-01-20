import client from './db'

class Worker {
    run(): string {
        return client.query('foo');
    }
}

export default new Worker();
