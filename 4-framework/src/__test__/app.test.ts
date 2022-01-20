import "reflect-metadata";

import { App } from '../app';

describe('Test app', () => {
    test('app', () => {
        class MyWorker {
            run(): string {
                return '';
            }
        }
        const app = new App(new MyWorker());
        expect(app).not.toBe(null);
    });
});
