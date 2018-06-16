import { mount, shallow } from "enzyme";
import * as React from "react";

import Link from "../Link";

test("Render a component", () => {
    shallow(<Link href="https://foo.bar">baz</Link>);
});

test("Click a component", () => {
    mount(<Link href="https://foo.bar">baz</Link>).simulate("click");
});
