import { lighten } from "polished";
import * as React from "react";
import styled from "styled-components";

import { backgroundLightness, colors, masks, Page } from "../domain";
import SocialMediaLinks from "./SocialMediaLinks";

const MetaPage = styled.div`
    flex: 1;
    overflow: auto;
`;

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
`;

const Content = styled.div`
    min-height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Wrapper = styled.div`
    padding: 3em 4em;
    padding-right: 5em;
    max-width: 60em;
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
                    <Wrapper>
                        {children}
                    </Wrapper>
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
