import { shallow } from "enzyme";
import * as React from "react";

import AboutPage from "../AboutPage";

test("Render a component", () => {
    shallow(<AboutPage active={true} />);
});
