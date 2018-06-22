import * as React from "react";

import * as domain from "../domain";
import Page from "./Page";

export default class extends React.Component {
    public render() {
        return (
            <Page
                title={domain.Page.Skills}
                subtitle="my knowledge and ability"
            >
                Hello, world!
            </Page>
        );
    }
}
