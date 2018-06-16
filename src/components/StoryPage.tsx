import * as React from "react";

import * as domain from "../domain";
import Page from "./Page";

export default class extends React.Component {
    public render() {
        return (
            <Page
                title={domain.Page.Story}
                subtitle="what I'm looking for in my career"
            >
                Hello, world!
            </Page>
        );
    }
}
