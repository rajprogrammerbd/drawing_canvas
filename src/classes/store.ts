
let init = false;

interface ObjectType {
    [type: string]: any;
}

export default class Store {
    private data: ObjectType;

    constructor () {
        if (init) {
            throw new Error("You can't create multiple instance");
        }

        this.data = {}
    }

    push<T>(key: string, value: T): void {
        if (this.data[key]) {
            throw new Error("key is stored already");
        }

        this.data[key] = value;
    }
}
