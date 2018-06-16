import * as React from "react";

import * as domain from "../domain";
import Page from "./Page";
import Work from "./Work";

export default class extends React.Component {
    public render() {
        return (
            <Page
                title={domain.Page.Works}
                subtitle="works I've made in a number of programming languages"
            >
                <Work
                    href="https://tasks.code2d.org"
                    image="https://tasks.code2d.org/icon512.png"
                    name="Pomodoro Tasks"
                >
                    An easy-to-use todo and pomodoro timer app.
                </Work>
            </Page>
        );
    }
}
