import createStore from "..";
import { PageId } from "../../domain";
import { actionCreators, initialState, reducer } from "../page";

function getState(store): typeof initialState {
    return store.getState().page;
}

test("Set a current page", async () => {
    const store = createStore();
    expect(getState(store)).toEqual(initialState);

    store.dispatch(actionCreators.setCurrentPageId(PageId.Projects));
    expect(getState(store)).toEqual({ ...initialState, currentPageId: PageId.Projects });

    store.dispatch(actionCreators.setCurrentPageId(PageId.Contribution));
    expect(getState(store)).toEqual({ ...initialState, currentPageId: PageId.Contribution });
});

test("Set a next page", async () => {
    const store = createStore();
    expect(getState(store)).toEqual(initialState);

    store.dispatch(actionCreators.setNextPageId(PageId.Projects));
    expect(getState(store)).toEqual({ ...initialState, nextPageId: PageId.Projects });

    store.dispatch(actionCreators.setNextPageId(PageId.Contribution));
    expect(getState(store)).toEqual({ ...initialState, nextPageId: PageId.Contribution });
});
