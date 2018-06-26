import * as React from "react";
import styled from "styled-components";

import SocialMediaLinks from "./SocialMediaLinks";

const MetaPage = styled.div<{ active: boolean }>`
    flex: 1;
    overflow: auto;
    display: ${({ active }) => active ? "unset" : "none"};
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
    active: boolean;
}

export default class extends React.Component<IProps> {
    public render() {
        const { active, children } = this.props;

        return (
            <MetaPage active={active}>
                <Content>
                    <Wrapper>
                        {children}
                    </Wrapper>
                </Content>
                <SocialMediaLinks />
            </MetaPage>
        );
    }
}
