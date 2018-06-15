import { shallow } from "enzyme";
import * as React from "react";
import Add = require("react-icons/lib/md/add");

import Button from "../Button";

test("Render a component", () => {
    shallow(<Button icon={<Add />} onClick={() => undefined}>foo</Button>);
});

test("Handle a click", () => {
    let clicked = false;

    const element = shallow(<Button icon={<Add />} onClick={() => { clicked = true; }}>foo</Button>);
    element.simulate("click");

    expect(clicked).toBe(true);
});
