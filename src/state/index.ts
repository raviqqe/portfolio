import { combineReducers, createStore, Store } from "redux";

import * as environment from "./environment";
import * as page from "./page";

export default function(): Store {
    const store = createStore(combineReducers({ environment: environment.reducer, page: page.reducer }));

    environment.initializeStore(store);

    return store;
}
