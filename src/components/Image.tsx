import * as React from "react";
import styled from "styled-components";

const Image = styled.img`
    height: ${({ height }) => height || "100%"};
    object-fit: contain;
`;

const Link = styled.a<{ height?: string }>`
    height: ${({ height }) => height || "initial"};
`;

interface IProps {
    height?: string;
    href?: string;
    src: string;
}

export default class extends React.Component<IProps> {
    public render() {
        const { height, href, src } = this.props;

        return href ?
            <Link height={height} href={href}><Image src={src} /></Link> :
            <Image height={height} src={src} />;
    }
}
