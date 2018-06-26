import { lighten } from "polished";
import * as React from "react";
import styled from "styled-components";

import { backgroundLightness, colors, masks, Page } from "../domain";
import SocialMediaLinks from "./SocialMediaLinks";

const MetaPage = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
`;

const Background = styled.div<{ color: string, mask: string }>`
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    background-color: ${({ color }) => color};
    mask-image: url("${({ mask }) => mask}");
    mask-size: cover;
`;

const Content = styled.div`
    padding: 3em 4em;
    max-width: 60em;
    max-height: 100%;
    overflow: auto;
`;

interface IProps {
    page: Page;
}

export default class extends React.Component<IProps> {
    public render() {
        const { children, page } = this.props;

        return (
            <MetaPage>
                <Content>
                    {children}
                </Content>
                <SocialMediaLinks />
                <Background
                    color={lighten(backgroundLightness[page], colors[page])}
                    mask={masks[page]}
                />
            </MetaPage>
        );
    }
}
