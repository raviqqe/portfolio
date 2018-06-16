import { shallow } from "enzyme";
import * as React from "react";

import Work from "../Work";

test("Render a component", () => {
    shallow(<Work href="https://my.domain" image="foo.png" name="bar">baz</Work>);
});
