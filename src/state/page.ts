import actionCreatorFactory from "typescript-fsa";
import { reducerWithInitialState } from "typescript-fsa-reducers";

import { PageId } from "../domain";

const actionCreator = actionCreatorFactory("PAGE");

const setCurrentPageId = actionCreator<PageId>("SET_CURRENT_PAGE_ID");

export const actionCreators = {
    setCurrentPageId,
};

export type IActionCreators = typeof actionCreators;

export const initialState = { currentPageId: PageId.About };

export type IState = typeof initialState;

export const reducer = reducerWithInitialState(initialState)
    .case(actionCreators.setCurrentPageId, (_, currentPageId) => ({ currentPageId }));
