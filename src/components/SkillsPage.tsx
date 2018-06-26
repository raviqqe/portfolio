import * as React from "react";

import * as domain from "../domain";
import { Rust } from "../images";
import Background = require("../images/skills.svg");
import Page from "./Page";
import Tool from "./Tool";
import Tools from "./Tools";

export default class extends React.Component {
    public render() {
        return (
            <Page
                backgroundImage={Background}
                title={domain.Page.Skills}
                subtitle="my knowledge and ability"
            >
                <Tools label="Programming Languages">
                    <Tool image={require("devicon/icons/typescript/typescript-original.svg")}>
                        TypeScript
                    </Tool>
                    <Tool image={require("devicon/icons/javascript/javascript-original.svg")}>
                        JavaScript
                    </Tool>
                    <Tool image={require("devicon/icons/python/python-original.svg")}>
                        Python
                    </Tool>
                    <Tool image={require("devicon/icons/go/go-original.svg")}>
                        Go
                    </Tool>
                    <Tool image={Rust}>
                        Rust
                    </Tool>
                    <Tool image={require("devicon/icons/html5/html5-original.svg")}>
                        HTML
                    </Tool>
                    <Tool image={require("devicon/icons/css3/css3-original.svg")}>
                        CSS
                    </Tool>
                    <Tool image={require("devicon/icons/sass/sass-original.svg")}>
                        SASS
                    </Tool>
                </Tools>
                <Tools label="Libraries & Frameworks">
                    <Tool image={require("devicon/icons/react/react-original.svg")}>
                        React
                    </Tool>
                    <Tool image={require("../images/tensorflow.svg")}>
                        TensorFlow
                    </Tool>
                    <Tool image={require("devicon/icons/jquery/jquery-original.svg")}>
                        jQuery
                    </Tool>
                </Tools>
                <Tools label="Tools">
                    <Tool image={require("devicon/icons/git/git-original.svg")}>
                        Git
                    </Tool>
                    <Tool image={require("devicon/icons/linux/linux-original.svg")}>
                        Linux
                    </Tool>
                    <Tool image={require("devicon/icons/docker/docker-original.svg")}>
                        Docker
                    </Tool>
                    <Tool image={require("devicon/icons/vim/vim-original.svg")}>
                        Vim
                    </Tool>
                    <Tool image={require("devicon/icons/nodejs/nodejs-original.svg")}>
                        Node.js
                    </Tool>
                    <Tool image={require("devicon/icons/webpack/webpack-original.svg")}>
                        Webpack
                    </Tool>
                    <Tool image={require("devicon/icons/github/github-original.svg")}>
                        GitHub
                    </Tool>
                    <Tool image={require("devicon/icons/travis/travis-plain.svg")}>
                        Travis CI
                    </Tool>
                    <Tool image={require("devicon/icons/inkscape/inkscape-original.svg")}>
                        Inkscape
                    </Tool>
                    <Tool image={require("devicon/icons/cucumber/cucumber-plain.svg")}>
                        Cucumber
                    </Tool>
                </Tools>
            </Page>
        );
    }
}
