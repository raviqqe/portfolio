import { shallow } from "enzyme";
import * as React from "react";
import { Provider } from "react-redux";

import createStore from "../../state";
import Header from "../Header";

test("Render a component", () => {
    shallow(<Provider store={createStore()}><Header /></Provider>);
});
