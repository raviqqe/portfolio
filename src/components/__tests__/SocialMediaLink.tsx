import { shallow } from "enzyme";
import * as React from "react";
import Add = require("react-icons/lib/md/add");

import SocialMediaLink from "../SocialMediaLink";

test("Render a component", () => {
    shallow(<SocialMediaLink color="black" href="https://google.com" icon={<Add />} />);
});
