import { lighten } from "polished";
import * as React from "react";
import styled from "styled-components";

export const linkColor = "#bb0000";

export const Link = styled.a`
    color: ${linkColor};
    font-size: inherit;
    text-decoration: none;

    &:visited {
        color: ${linkColor};
    }

    &:hover {
        color: ${lighten(0.2, linkColor)};
        text-decoration: underline;
    }
`;

interface IProps {
    href: string;
}

export default class extends React.Component<IProps> {
    public render() {
        const { children, href } = this.props;

        return (
            <Link
                href={href}
                onClick={(event) => event.stopPropagation()}
            >
                {children}
            </Link>
        );
    }
}
