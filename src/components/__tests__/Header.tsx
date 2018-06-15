import * as React from "react";
import * as ReactDOM from "react-dom";

import Header from "../Header";

test("Render a component", () => {
    ReactDOM.render(<Header />, document.createElement("div"));
});
