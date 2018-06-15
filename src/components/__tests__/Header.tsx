import * as React from "react";
import * as ReactDOM from "react-dom";

import Header from "../Header";

test("Render a component", () => {
    ReactDOM.render(
        <Header description="a human." name="me" />,
        document.createElement("div"));
});
