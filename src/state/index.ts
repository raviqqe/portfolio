import { combineReducers, createStore, Store } from "redux";

import * as page from "./page";

export default function(): Store<any, any> {
    return createStore(combineReducers({ page: page.reducer }));
}
