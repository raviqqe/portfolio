import * as React from "react";
import styled from "styled-components";

import { verticalMargin } from "../style";
import Image from "./Image";
import Link from "./Link";
import Text from "./Text";

const Project = styled.div`
    max-width: 16em;
    display: flex;
    flex-direction: column;
    align-items: center;

    ${verticalMargin("0.5rem")}

    > *:first-child {
        margin-bottom: 1rem;
    }
`;

const Name = styled.h3`
    font-size: 1.5em;
`;

interface IProps {
    href: string;
    image: string;
    imagePercentage?: number;
    name: string;
}

export default class extends React.Component<IProps> {
    public render() {
        const { children, href, image, imagePercentage, name } = this.props;

        return (
            <Project>
                <Image href={href} imagePercentage={imagePercentage} src={image} height="10em" />
                <Name><Link href={href}>{name}</Link></Name>
                <Text>{children}</Text>
            </Project>
        );
    }
}
