import actionCreatorFactory from "typescript-fsa";
import { reducerWithInitialState } from "typescript-fsa-reducers";

import { PageId } from "../domain";

const actionCreator = actionCreatorFactory("PAGE");

const setPage = actionCreator<PageId>("SET_PAGE");

export const actionCreators = {
    setPage,
};

export type IActionCreators = typeof actionCreators;

export const initialState = { page: PageId.About };

export type IState = typeof initialState;

export const reducer = reducerWithInitialState(initialState)
    .case(actionCreators.setPage, (_, page) => ({ page }));
