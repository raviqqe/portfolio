import { shallow } from "enzyme";
import * as React from "react";

import StoryPage from "../StoryPage";

test("Render a component", () => {
    shallow(<StoryPage />);
});
