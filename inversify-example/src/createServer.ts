import { createServer as createServerImpl } from 'http';

import { Container } from "inversify";

import { TYPES } from './types';
import { Response } from './handlers';

export interface HttpServer {
    listen(port: number, host: string, callback: Function): any;
}

export interface HandlerFn {
    (_req: any, res: Response): Promise<void>
}

export interface CreateServer {
    (handler: HandlerFn): HttpServer;
}

export const bind = (container: Container): void => {
    container.bind<CreateServer>(TYPES.CreateServer).toConstantValue(createServerImpl);
};
