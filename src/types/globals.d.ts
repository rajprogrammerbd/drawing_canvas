import Store from "../classes/store"

declare global {
    interface Window {
        store: Store;
    }
}

export {}
