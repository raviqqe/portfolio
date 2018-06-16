import * as React from "react";
import styled from "styled-components";

const Link = styled.a`
	color: coral;
	font-size: inherit;
	text-decoration: none;

	&:visited {
		color: coral;
	}

	&:hover {
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
