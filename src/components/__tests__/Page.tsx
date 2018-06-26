import { shallow } from "enzyme";
import * as React from "react";

import * as domain from "../../domain";
import Page from "../Page";

test("Render a component", () => {
    shallow(
        <Page active={true} page={domain.Page.About} title="Projects" subtitle="good work." >
            a statue
        </Page>,
    );
});
