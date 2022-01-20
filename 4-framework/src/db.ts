import { injectable, inject } from "inversify";

import { ClientToken } from './types';

interface Client {
    query(ql: string): string;
}

export interface ClientCon {
    new (uri: string): Client;
}

export interface WorkerClient {
    workerQuery(): string;
}

@injectable()
export class WorkerClientImpl {
    client: Client

    constructor(
        @inject(ClientToken) ClientConImpl: ClientCon,
    ) {
        this.client = new ClientConImpl('localhost:1000');
    }

    workerQuery(): string {
        return this.client.query('foo');
    }
}
