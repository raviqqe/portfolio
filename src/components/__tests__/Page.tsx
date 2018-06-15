import { shallow } from "enzyme";
import * as React from "react";

import Page from "../Page";

test("Render a component", () => {
    shallow(<Page title="Works" subtitle="good work." >a statue</Page>);
});
