import * as React from "react";

import { Page } from "../domain";

interface IState {
    page: Page;
}

export default class extends React.Component<{}, IState> {
    public render() {
        return <div>Hello, world!</div>;
    }
}
