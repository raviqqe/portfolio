import { mount, shallow } from "enzyme";
import * as React from "react";
import Add = require("react-icons/lib/md/add");
import { Provider } from "react-redux";

import { PageId } from "../../domain";
import createStore from "../../state";
import Button from "../Button";

test("Render a component", () => {
    shallow(
        <Provider store={createStore()}>
            <Button active={false} icon={<Add />} pageId={PageId.About}>foo</Button>
        </Provider>,
    );
});

test("Set a page", () => {
    const store = createStore();

    const element = mount(
        <Provider store={store}>
            <Button active={false} icon={<Add />} pageId={PageId.Projects}>foo</Button>
        </Provider>,
    );

    element.simulate("click");

    expect(store.getState().page.page).toBe(PageId.Projects);
});
