import { shallow } from "enzyme";
import * as React from "react";
import { Provider } from "react-redux";

import createStore from "../../state";

import App from "../App";

test("Render a component", () => {
    shallow(<Provider store={createStore()}><App /></Provider>);
});
