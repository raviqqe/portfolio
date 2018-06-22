import * as React from "react";
import styled from "styled-components";

import { instantDuration } from "../style";
import { Link as NormalLink, linkColor } from "./Link";

const Link = styled.a<{ color: string }>`
    font-size: 2.5em;
    color: ${({ color }) => color}
    line-height: 0;
    text-decoration: none;
    transition: transform ${instantDuration};

    &:hover {
        text-decoration: none;
        transform: scale(1.3);
    }

    &:visited {
        color: ${({ color }) => color};
    }
`;

interface IProps {
    color: string;
    href: string;
    icon: JSX.Element;
}

export default class extends React.Component<IProps> {
    public render() {
        const { color, href, icon } = this.props;

        return <Link color={color} href={href}>{icon}</Link>;
    }
}
