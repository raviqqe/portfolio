import { mount, shallow } from "enzyme";
import * as React from "react";
import Add = require("react-icons/lib/md/add");
import { Provider } from "react-redux";

import { Page } from "../../domain";
import createStore from "../../state";
import PageButton from "../PageButton";

test("Render a component", () => {
    shallow(
        <Provider store={createStore()}>
            <PageButton icon={<Add />} page={Page.Works} />
        </Provider>,
    );
});

test("Render proper text", () => {
    const element = mount(
        <Provider store={createStore()}>
            <PageButton
                icon={<Add />}
                page={Page.Works}
            />
        </Provider >,
    );

    expect(element.text()).toBe("works");
});

test("Set a page on click", () => {
    const store = createStore();

    expect(store.getState().page.page).not.toBe(Page.Contribution);

    const element = mount(
        <Provider store={store}>
            <PageButton
                icon={<Add />}
                page={Page.Contribution}
            />
        </Provider >,
    );

    element.simulate("click");

    expect(store.getState().page.page).toBe(Page.Contribution);
});
