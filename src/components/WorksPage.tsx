import * as React from "react";
import styled from "styled-components";

import * as domain from "../domain";
import Go = require("../images/go.svg");
import TensorFlow = require("../images/tensorflow.svg");
import Link from "./Link";
import Page from "./Page";
import Text from "./Text";
import Work from "./Work";

const tensorFlowLogoURL = "https://raw.githubusercontent.com/valohai/ml-logos/master/tensorflow-tf.svg";

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
                subtitle="projects I've worked on in different languages"
            >
                <Works>
                    <Work
                        href="https://cloe-lang.org"
                        image="https://cloe-lang.org/icon512.png"
                        name="Cloe programming language"
                    >
                        Cloe is the timeless functional programming language
                        which provides implicit parallelism, concurrency, and
                        reactiveness and aims to be simple and practical.
                        The word "timeless" denotes that there is no concept of
                        time in the language by default, which simplifies codes
                        enormously.
                        Its traits originate from other functional programming
                        languages while its runtime is heavily based on part
                        of Haskell which relates to its parallelism and concurrency.
                    </Work>
                    <Work
                        href="https://tasks.code2d.org"
                        image="https://tasks.code2d.org/icon512.png"
                        name="Pomodoro Tasks"
                    >
                        An easy-to-use todo and pomodoro timer app.
                        It is developed with React/Redux and TypeScript as a
                        Progressive Web App and runs on Firebase backend.
                        In addition to data synchronization over multiple devices
                        and responsive design, its best feature is offline capability
                        with which users can manage and edit their tasks even
                        when their devices are not connected to the Internet.
                    </Work>
                    <Work
                        href="https://github.com/raviqqe/muffet"
                        image={Go}
                        name="Muffet"
                    >
                        Muffet is the fast website link checker written in Go.
                        Although this kind of tool was necessary to develop and
                        maintain static websites for me, I've never met any
                        satisfactory tool which fills my functional and
                        performance needs.
                        And that's why I made it.
                        When you run it on terminal, it looks very fast as the
                        common bottlenecks in web scraping is optimized so that
                        check results are displayed asynchronously as it flows.
                    </Work>
                    <Work
                        href="https://github.com/raviqqe/hamt"
                        image={Go}
                        name="HAMT in Go"
                    >
                        Hash-Array Mapped Trie (HAMT) implementation in Go which
                        realizes immutable and memory-efficient map and set data structures.
                        HAMT is a data structure popular as a map (a.k.a.
                        associative array or dictionary) or set and its immutable
                        variant is adopted widely by functional programming languages.
                        While HAMT has been long since it was proposed, this
                        library integrates improvement found in recent research.
                    </Work>
                    <Work
                        href="https://github.com/raviqqe/tensorflow-font2char2word2sent2doc"
                        image={TensorFlow}
                        name="tensorflow-font2char2word2sent2doc"
                    >
                        The implementation of {" "}
                        <Link href="https://aclweb.org/anthology/I17-2064">
                            Utilizing Visual Forms of Japanese Characters for
                            Neural Review Classification
                        </Link>
                        {" "}and{" "}
                        <Link
                            href={
                                "https://www.cs.cmu.edu/~./hovy/papers/" +
                                "16HLT-hierarchical-attention-networks.pdf"}
                        >
                            Hierarchical Attention Networks for Document Classification
                        </Link> written with TensorFlow and Python as my research work.
                        The design completely separates hyperparameters and
                        the models themselves so that hyperparameter optimization
                        can be done easily and third-party users utilize the library
                        for use cases other than just research experiments.
                    </Work>
                    <Work
                        href="https://github.com/raviqqe/tensorflow-qnd"
                        image={TensorFlow}
                        name="tensorflow-qnd"
                    >
                        A Python library to fasilitate distributed training and model
                        evaluation of Deep Learning models written in TensorFlow.
                        It totally automates input data processing and result
                        data saving and data-parallel training over multiple
                        GPUs on multiple machines, which multiplied training
                        speed several times in my environment.
                    </Work>
                </Works>
                <Text>
                    Please refer to
                    {" "}<Link href="https://github.com/raviqqe">my GitHub page</Link>{" "}
                    to find more projects.
                </Text>
            </Page>
        );
    }
}
