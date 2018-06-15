import { shallow } from "enzyme";
import * as React from "react";

import App from "../App";

test("Render a component", () => {
    shallow(<App />);
});
