import * as React from "react";
import styled from "styled-components";

import * as domain from "../domain";
import { Linuxbrew, Rust } from "../images";
import TensorFlow = require("../images/tensorflow.svg");
import Link from "./Link";
import Page from "./Page";
import Project from "./Project";
import Text from "./Text";

const Projects = styled.div`
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
                title={domain.Page.Contribution}
                subtitle="activities for OSS projects and communities"
            >
                <Text>
                    I've written a number of codes mostly as pull requests to
                    third-party repositories on GitHub.
                    The projects I contributed to are listed here, which
                    describes what kinds of technical topics what I'm interested
                    in and keen on.
                </Text>
                <Projects>
                    <Project
                        href="https://tensorflow.org"
                        image={TensorFlow}
                        imagePercentage={85}
                        name="TensorFlow"
                    >
                        TensorFlow is one of the most popular Deep Learning
                        libraries and frameworks.
                        I wrote several codes in Python for the project as part of
                        {" "}
                        <Link href="https://github.com/raviqqe/tensorflow-qnd">
                            my personal project
                        </Link>
                        {" "}
                        which automates distributed training, input data
                        processing, result and model storing over multiple GPUs
                        on multiple machines.
                        My contribution are some bug fixes and proposals which
                        improve usability and consistency of the API.
                    </Project>
                    <Project
                        href="https://github.com/rust-lang-nursery/futures-rs"
                        image={Rust}
                        name="futures-rs"
                    >
                        futures.rs is an implementation of promises and
                        async/await directives as macros in Rust.
                        It enables programmers to construct asynchronous
                        programs in a more natural and structured way than
                        other methods like callbacks chain.
                        I helped the implementation of boxed asynchronous
                        coroutines in the library which was initially broken
                        and essential especially when you need to write
                        recursive asynchronous functions.
                    </Project>
                    <Project
                        href="https://github.com/Linuxbrew/homebrew-core"
                        image={Linuxbrew}
                        imagePercentage={90}
                        name="Linuxbrew"
                    >
                        Linuxbrew is a fork of
                        {" "}<Link href="https://github.com/Homebrew">Homebrew</Link>,
                        the community-driven package manager for Mac written in Ruby.
                        Because I have been using Chromebook of 32-bit ARM as
                        my development machine, I needed to deal with problems
                        which is specific to the architecture.
                        I learned a lot about Linux, Ruby, Makefile, and other
                        building tools of different languages being involved in
                        this project.
                    </Project>
                </Projects>
                <Text>
                    Please visit <Link href="https://github.com/raviqqe">my GitHub profile</Link>
                    {" "}to see more of my contirubtion and OSS activities.
                </Text>
            </Page>
        );
    }
}
