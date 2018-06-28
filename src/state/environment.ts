import { Store } from "redux";
import actionCreatorFactory from "typescript-fsa";
import { reducerWithInitialState } from "typescript-fsa-reducers";

import { onWindowSizeChange, smallWindow } from "../infra/media";

const actionCreator = actionCreatorFactory("ENVIRONMENT");

const setSmallWindow = actionCreator<boolean>("SET_SMALL_WINDOW");

export const initialState = {
    smallWindow,
};

export type IState = typeof initialState;

export const reducer = reducerWithInitialState(initialState)
    .case(setSmallWindow, (_, smallWindow) => ({ smallWindow }));

export function initializeStore(store: Store): void {
    onWindowSizeChange((smallWindow) => store.dispatch(setSmallWindow(smallWindow)));
}
