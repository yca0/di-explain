import { WorkerClient } from './db'

export class Worker {
    workerClient: WorkerClient

    constructor(workerClient: WorkerClient) {
        this.workerClient = workerClient;
    }

    run(): string {
        return this.workerClient.workerQuery();
    }
}
