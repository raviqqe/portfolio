import * as React from "react";

import * as domain from "../domain";
import Page from "./Page";

export default class extends React.Component {
    public render() {
        return (
            <Page
                title={domain.Page.Study}
                subtitle="my study and academic knowledge"
            >
                Hello, world!
            </Page>
        );
    }
}
