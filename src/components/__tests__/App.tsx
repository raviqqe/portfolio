import * as React from "react";
import * as ReactDOM from "react-dom";

import App from "../App";

test("Render a component", () => {
    ReactDOM.render(<App />, document.createElement("div"));
});
