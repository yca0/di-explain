// No need to worry about coverage inside ClientImpl because
// it's usually from a 3rd party library
export class Client {
    uri: string

    constructor(uri: string) {
        this.uri = uri;
        this.createConnection();
    }

    // cannot run this in unit test!!!
    createConnection(): void {
        console.log(`Connect to ${this.uri}`);
    }

    // cannot run this in unit test!!!
    query(_ql: string): string {
        return 'db response';
    }
}
