import * as React from "react";
import styled from "styled-components";

const Link = styled.a`
    line-height: 0;
    text-decoration: none;
    font-size: 2em;
    color: black;

    &:visited {
        color: black;
    }
`;

interface IProps {
    href: string;
    icon: JSX.Element;
}

export default class extends React.Component<IProps> {
    public render() {
        const { href, icon } = this.props;

        return <Link href={href}>{icon}</Link>;
    }
}
