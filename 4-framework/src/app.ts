import { injectable, inject } from "inversify";

import { Worker, WorkerImpl } from './worker'

@injectable()
export class App {
    worker: Worker

    constructor(
        @inject(WorkerImpl) worker: Worker,
    ) {
        console.log(worker.run());
    }
}
