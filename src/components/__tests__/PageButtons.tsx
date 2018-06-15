import { shallow } from "enzyme";
import * as React from "react";

import PageButtons from "../PageButtons";

test("Render a component", () => {
    shallow(<PageButtons />);
});
