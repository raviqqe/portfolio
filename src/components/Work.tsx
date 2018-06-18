import * as React from "react";
import styled from "styled-components";

import { verticalMargin } from "../style";
import Image from "./Image";
import Link from "./Link";
import Text from "./Text";

const Work = styled.div`
    width: 16em;
    display: flex;
    flex-direction: column;
    align-items: center;

    > * {
        margin: 0.4em 0;
    }
`;

const Name = styled.h3`
    font-size: 1.2em;
`;

interface IProps {
    href: string;
    image: string;
    name: string;
}

export default class extends React.Component<IProps> {
    public render() {
        const { children, href, image, name } = this.props;

        return (
            <Work>
                <Image href={href} src={image} height="10em" />
                <Name><Link href={href}>{name}</Link></Name>
                <Text>{children}</Text>
            </Work>
        );
    }
}
