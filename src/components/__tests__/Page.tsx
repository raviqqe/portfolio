import * as React from "react";
import * as ReactDOM from "react-dom";

import Page from "../Page";

test("Render a component", () => {
    ReactDOM.render(
        <Page title="Works" subtitle="good work." >a statue</Page>,
        document.createElement("div"));
});
