import * as React from "react";
import styled from "styled-components";

const Image = styled.img`
    width: ${({ width }) => width || "100%"};
    object-fit: cover;
`;

const Link = styled.a<{ width?: string }>`
    width: ${({ width }) => width || "initial"};
`;

interface IProps {
    href?: string;
    src: string;
    width?: string;
}

export default class extends React.Component<IProps> {
    public render() {
        const { href, src, width } = this.props;

        return href ?
            <Link href={href} width={width}><Image src={src} /></Link> :
            <Image src={src} width={width} />;
    }
}
