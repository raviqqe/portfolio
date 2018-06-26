import { shallow } from "enzyme";
import * as React from "react";

import Background = require("../../images/about.svg");
import Page from "../Page";

test("Render a component", () => {
    shallow(
        <Page backgroundImage={Background} title="Projects" subtitle="good work." >
            a statue
        </Page>,
    );
});
