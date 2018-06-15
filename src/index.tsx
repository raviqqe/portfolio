import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { injectGlobal } from "styled-components";

import App from "./components/App";
import createStore from "./state";

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

const store = createStore();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root"));
