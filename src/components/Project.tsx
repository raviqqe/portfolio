import * as React from "react";
import styled from "styled-components";

import Link from "./Link";
import Text from "./Text";

interface IProps {
    href: string;
    name: string;
}

const Project = styled.div`
    width: 16em;
    display: flex;
    flex-direction: column;
    align-items: center;

    > * {
        margin: 0.4em 0;
    }
`;

const Name = styled.h3`
    font-size: 1.3em;
`;

export default class extends React.Component<IProps> {
    public render() {
        const { children, href, name } = this.props;

        return (
            <Project>
                <Name><Link href={href}>{name}</Link></Name>
                <Text>{children}</Text>
            </Project>
        );
    }
}
