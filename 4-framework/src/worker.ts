import { injectable, inject } from "inversify";

import { WorkerClient, WorkerClientImpl } from './db'

export interface Worker {
    run(): string;
}

@injectable()
export class WorkerImpl {
    workerClient: WorkerClient

    constructor(
        @inject(WorkerClientImpl) workerClient: WorkerClient,
    ) {
        this.workerClient = workerClient;
    }

    run(): string {
        return this.workerClient.workerQuery();
    }
}
