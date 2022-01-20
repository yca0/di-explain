import { Client as ClientImpl } from './dbLib';

let client: Client;

interface Client {
    query(ql: string): string
}

export const setClient = (c: Client) => {
    client = c;
}

export const getClient = () => {
    if (!client) {
        // unit test cannot cover this branch!!!
        setClient(new ClientImpl('localhost:1000'));
    }
    return client;
}
