import actionCreatorFactory from "typescript-fsa";
import { reducerWithInitialState } from "typescript-fsa-reducers";

import { PageId } from "../domain";

const actionCreator = actionCreatorFactory("PAGE");

const setCurrentPageId = actionCreator<PageId>("SET_CURRENT_PAGE_ID");
const setNextPageId = actionCreator<PageId | null>("SET_NEXT_PAGE_ID");

export const actionCreators = {
    setCurrentPageId,
    setNextPageId,
};

export type IActionCreators = typeof actionCreators;

export interface IState {
    currentPageId: PageId;
    nextPageId: PageId | null;
}

export const initialState: IState = {
    currentPageId: PageId.About,
    nextPageId: null,
};

export const reducer = reducerWithInitialState(initialState)
    .case(actionCreators.setCurrentPageId, (state, currentPageId) => ({ ...state, currentPageId }))
    .case(actionCreators.setNextPageId, (state, nextPageId) => ({ ...state, nextPageId }));
