import * as React from "react";
import styled from "styled-components";

import * as domain from "../domain";
import Page from "./Page";
import Work from "./Work";

const spiderImage = "http://res.freestockphotos.biz/pictures/4/4906-illustration-of-a-spider-on-a-spider-web-pv.png";

const Works = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    > * {
        margin: 0.5em;
    }
`;

export default class extends React.Component {
    public render() {
        return (
            <Page
                title={domain.Page.Works}
                subtitle="works I've made in a number of programming languages"
            >
                <Works>
                    <Work
                        href="https://cloe-lang.org"
                        image="https://cloe-lang.org/icon512.png"
                        name="Cloe programming language"
                    >
                        Cloe is the timeless functional programming language
                        which provides implicit parallelism, concurrency, and
                        reactiveness. It aims to be simple and practical.
                    </Work>
                    <Work
                        href="https://tasks.code2d.org"
                        image="https://tasks.code2d.org/icon512.png"
                        name="Pomodoro Tasks"
                    >
                        An easy-to-use todo and pomodoro timer app.
                    </Work>
                    <Work
                        href="https://github.com/raviqqe/muffet"
                        image={spiderImage}
                        name="Muffet"
                    >
                        Muffet is the fast website link checker written in Go.
                    </Work>
                </Works>
            </Page>
        );
    }
}
