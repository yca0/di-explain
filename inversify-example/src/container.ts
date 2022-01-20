import { Container } from "inversify";

import { bind as readFileBind } from './readFile';
import { bind as createServerBind } from './createServer';

const container = new Container({
    autoBindInjectable: true,
});

readFileBind(container);
createServerBind(container);

export default container;
