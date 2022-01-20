import { readFile as readFileImpl } from 'fs/promises';

import { Container } from "inversify";

import { TYPES } from './types';

export interface ReadFile {
    (path: string, opts: any): Promise<string>;
}

export const bind = (container: Container): void => {
    container.bind<ReadFile>(TYPES.ReadFile).toConstantValue(readFileImpl);
};
