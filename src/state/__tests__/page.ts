import createStore from "..";
import { Page } from "../../domain";
import { actionCreators, initialState, reducer } from "../page";

function getState(store): typeof initialState {
    return store.getState().page;
}

test("Set a current page", async () => {
    const store = createStore();
    expect(getState(store)).toEqual(initialState);

    store.dispatch(actionCreators.setPage(Page.Projects));
    expect(getState(store)).toEqual({ page: Page.Projects });

    store.dispatch(actionCreators.setPage(Page.Contribution));
    expect(getState(store)).toEqual({ page: Page.Contribution });
});
