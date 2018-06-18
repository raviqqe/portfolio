import * as React from "react";
import styled from "styled-components";

import { Link as NormalLink, linkColor } from "./Link";

const Link = styled(NormalLink)`
    line-height: 0;
    text-decoration: none;
    font-size: 2em;

    &:hover {
        text-decoration: none;
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
