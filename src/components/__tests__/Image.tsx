import { shallow } from "enzyme";
import * as React from "react";

import Image from "../Image";

test("Render a component", () => {
    shallow(<Image src="/icon.png" />);
});

test("Render a component with a link", () => {
    shallow(<Image href="/" src="/icon.png" />);
});

test("Render a component specifying its height", () => {
    shallow(<Image height="80%" src="/icon.png" />);
});

test("Render a component with a link specifying its height", () => {
    shallow(<Image height="80%" href="/" src="/icon.png" />);
});
