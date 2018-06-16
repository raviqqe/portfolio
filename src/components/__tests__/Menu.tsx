import { shallow } from "enzyme";
import * as React from "react";

import Menu from "../Menu";

test("Render a component", () => {
    shallow(<Menu />);
});
