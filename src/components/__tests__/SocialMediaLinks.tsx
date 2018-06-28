import { shallow } from "enzyme";
import * as React from "react";
import { Provider } from "react-redux";

import createStore from "../../state";
import SocialMediaLinks from "../SocialMediaLinks";

test("Render a component", () => {
    shallow(<Provider store={createStore()}><SocialMediaLinks /></Provider>);
});
