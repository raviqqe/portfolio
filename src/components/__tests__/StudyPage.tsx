import { shallow } from "enzyme";
import * as React from "react";

import StudyPage from "../StudyPage";

test("Render a component", () => {
    shallow(<StudyPage />);
});
