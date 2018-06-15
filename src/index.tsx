import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "./components/App";
import createStore from "./state";
import "./style";

const store = createStore();

ReactDOM.render(
    <Provider store={store}><App /></Provider>,
    document.getElementById("root"));
