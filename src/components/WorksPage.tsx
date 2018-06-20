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
                        image={Go}
                        name="Muffet"
                    >
                        Muffet is the fast website link checker written in Go.
                    </Work>
                    <Work
                        href="https://github.com/raviqqe/hamt"
                        image={Go}
                        name="HAMT in Go"
                    >
                        HAMT implementation in Go.
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
                        </Link>.
                        It is written with TensorFlow and Python for my research
                        work when I was in university.
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
