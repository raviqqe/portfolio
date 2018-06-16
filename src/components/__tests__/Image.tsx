import { shallow } from "enzyme";
import * as React from "react";

import Image from "../Image";

test("Render a component", () => {
    shallow(<Image src="/icon.png" />);
});

test("Render a component with a link", () => {
    shallow(<Image href="/" src="/icon.png" />);
});

test("Render a component specifying its width", () => {
    shallow(<Image src="/icon.png" width="80%" />);
});

test("Render a component with a link specifying its width", () => {
    shallow(<Image href="/" src="/icon.png" width="80%" />);
});
