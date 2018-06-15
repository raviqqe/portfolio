import * as React from "react";
import * as ReactDOM from "react-dom";
import { injectGlobal } from "styled-components";

import App from "./components/App";

injectGlobal`
    body {
        font: 16px sans-serif;
        width: 100vw;
        height: 100vh;
        padding: 0;
        margin: 0;
        background: white;
    }

    div#root {
        width: 100%;
        height: 100%;
    }
`;

ReactDOM.render(<App />, document.getElementById("root"));
