import { shallow } from "enzyme";
import * as React from "react";

import WorksPage from "../WorksPage";

test("Render a component", () => {
    shallow(<WorksPage />);
});
