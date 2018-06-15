import * as React from "react";

import * as domain from "../domain";
import Page from "./Page";

export default class extends React.Component {
    public render() {
        return (
            <Page
                title={domain.Page.Works}
                subtitle="works I've made in a number of programming languages"
            >
                Hello, world!
            </Page>
        );
    }
}
