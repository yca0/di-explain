import { injectable, inject, Container } from "inversify";

import { TYPES } from './types';
import { ReadFile } from './readFile';

interface Response {
    statusCode: number,
    setHeader(h :string, v: string): any,
    end(body :string): any,
}

interface Handler {
    root(_req: any, res: Response): Promise<void>;
}

@injectable()
class HandlerImpl implements Handler {
    readFile: ReadFile;

    public constructor(
        @inject(TYPES.ReadFile) readFile: ReadFile,
    ) {
        this.readFile = readFile;
    }

    public async root(_req: any, res: Response): Promise<void> {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        const resTxt = await this.readFile('response.txt', { encoding: 'utf8' });
        res.end(resTxt);
    }
}

export { Handler, HandlerImpl, Response };
