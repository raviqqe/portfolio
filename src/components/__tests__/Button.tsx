import * as React from "react";
import * as ReactDOM from "react-dom";
import Add = require("react-icons/lib/md/add");

import Button from "../Button";

test("Render a component", () => {
    ReactDOM.render(
        <Button icon={<Add />} onClick={() => undefined} />,
        document.createElement("div"));
});
