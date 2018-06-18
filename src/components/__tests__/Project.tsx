import { shallow } from "enzyme";
import * as React from "react";

import Project from "../Project";

test("Render a component", () => {
    shallow(<Project href="https://my.domain" name="foo">bar</Project>);
});
