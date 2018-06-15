import * as React from "react";
import * as ReactDOM from "react-dom";

import Content from "../Content";

test("Render a component", () => {
    ReactDOM.render(
        <Content title="Works" subtitle="good work." >a statue</Content>,
        document.createElement("div"));
});
