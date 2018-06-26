import { shallow } from "enzyme";
import * as React from "react";

import { PageId } from "../../domain";
import Page from "../Page";

test("Render a component", () => {
    shallow(
        <Page active={true} pageId={PageId.About} subtitle="good work." >
            a statue
        </Page>,
    );
});
