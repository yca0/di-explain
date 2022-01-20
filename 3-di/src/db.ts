interface Client {
    query(ql: string): string
}

export interface WorkerClient {
    workerQuery(): string
}

export class WorkerClientImpl {
    client: Client

    constructor(client: Client) {
        this.client = client;
    }

    workerQuery(): string {
        return this.client.query('foo');
    }
}
