import { lighten } from "polished";
import * as React from "react";
import styled from "styled-components";

import { backgroundLightness, colors, masks, Page } from "../domain";

const Background = styled.div<{ color: string, mask: string }>`
    position: fixed;
    left: 0;
    top: 0;
    z-index: -1;
    width: 100vw;
    height: 100vh;
    background-color: ${({ color }) => color};
    mask-image: url("${({ mask }) => mask}");
    mask-size: cover;
    transition: background-color 1s;
`;

interface IProps {
    page: Page;
}

export default class extends React.Component<IProps> {
    public render() {
        const { page } = this.props;

        return (
            <Background
                color={lighten(backgroundLightness[page], colors[page])}
                mask={masks[page]}
            />
        );
    }
}
