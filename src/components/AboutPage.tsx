import * as React from "react";

import Header from "./Header";
import MetaPage from "./MetaPage";
import Text from "./Text";

interface IProps {
    active: boolean;
}

export default class extends React.Component<IProps> {
    public render() {
        return (
            <MetaPage active={this.props.active}>
                <Header />
                <Text>
                    I'm a software engineer of full-stack development and
                    AI technology especially for Natural Language Processing.
                    I love coding of both hobby and work and create new things as I've been
                    involved in OSS projects and also worked on my personal projects.
                    Although there are various roles in software
                    development nowadays, I really like to take one in which
                    my skills and knowledge develop as products grow.
                    I track trends in technology daily and enjoy learning new things.
                    Because I tend to be interested in different fields,
                    I have learned various languages and frameworks since I was
                    a self-taught programmer.
                </Text>
            </MetaPage>
        );
    }
}
