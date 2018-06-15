import { shallow } from "enzyme";
import * as React from "react";

import Header from "../Header";

test("Render a component", () => {
    shallow(<Header />);
});
