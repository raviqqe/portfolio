import * as React from "react";
import styled from "styled-components";

const Frame = styled.div<{ height?: string }>`
    display: flex;
    place-items: center;
    height: ${({ height }) => height || "100%"};
`;

const Image = styled.img`
    height: ${({ height }) => height || "100%"};
    object-fit: contain;
`;

const Link = styled.a<{ height?: string }>`
    display: block;
    height: ${({ height }) => height || "100%"};
`;

interface IProps {
    height?: string;
    href?: string;
    imagePercentage?: number;
    src: string;
}

export default class extends React.Component<IProps> {
    public render() {
        const { height, href, imagePercentage, src } = this.props;
        const imageHeight = imagePercentage && imagePercentage + "%";

        return (
            <Frame height={height}>
                {href ?
                    <Link height={imageHeight} href={href}><Image src={src} /></Link> :
                    <Image height={imageHeight} src={src} />}
            </Frame>
        );
    }
}
