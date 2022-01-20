import "reflect-metadata";

import container from '../container';

describe('Test container', () => {
    test('container', () => {
        expect(container).not.toBe(null);
    });
});
