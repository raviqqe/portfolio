import { shallow } from "enzyme";
import * as React from "react";

import ContributionPage from "../ContributionPage";

test("Render a component", () => {
    shallow(<ContributionPage />);
});
