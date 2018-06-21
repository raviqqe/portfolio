import { shallow } from "enzyme";
import * as React from "react";

import Project from "../Project";

test("Render a component", () => {
    shallow(<Project href="https://my.domain" image="foo.png" name="bar">baz</Project>);
});
