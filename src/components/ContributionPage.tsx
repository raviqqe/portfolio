import * as React from "react";

import * as domain from "../domain";
import Page from "./Page";

export default class extends React.Component {
    public render() {
        return (
            <Page
                title={domain.Page.Contribution}
                subtitle="contributions for OSS projects mainly on GitHub"
            >
                Hello, world!
            </Page>
        );
    }
}
