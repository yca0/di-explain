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
