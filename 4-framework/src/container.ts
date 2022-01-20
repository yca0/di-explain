import { Container } from "inversify";

import { Client } from './dbLib';
import { ClientToken } from './types';
import { ClientCon } from './db';

const container = new Container({
    autoBindInjectable: true,
});

container.bind<ClientCon>(ClientToken).toConstantValue(Client);

export default container;
