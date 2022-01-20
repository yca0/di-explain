import { Worker } from './worker'
import { WorkerClientImpl } from './db'
import { Client } from './dbLib'

// index.ts is big but not covered by unit test

const workerClient = new WorkerClientImpl(new Client('localhost:1000'));

const worker = new Worker(workerClient);

console.log(worker.run());
