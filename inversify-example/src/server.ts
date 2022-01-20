import { injectable, inject } from "inversify";

import { Handler, HandlerImpl } from './handlers';
import { CreateServer } from './createServer';
import { TYPES } from './types';

@injectable()
class Server {
    public constructor(
        @inject(TYPES.CreateServer) createServer: CreateServer,
        @inject(HandlerImpl) handler: Handler,
    ) {
        const server = createServer(handler.root.bind(handler));
        server.listen(5000, '0.0.0.0', () => {
            console.log('Server started...');
        });
    }
}

export { Server };
