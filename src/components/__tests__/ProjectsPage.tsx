import { shallow } from "enzyme";
import * as React from "react";

import ProjectsPage from "../ProjectsPage";

test("Render a component", () => {
    shallow(<ProjectsPage />);
});
