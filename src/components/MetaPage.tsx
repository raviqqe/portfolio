import * as React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import * as environment from "../state/environment";
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

const Wrapper = styled.div<{ smallWindow: boolean }>`
    padding: 3em 4em;
    ${({ smallWindow }) => smallWindow ? "padding-bottom: 6em;" : "padding-right: 5em;"}
    max-width: 60em;
`;

interface IProps extends Partial<environment.IState> {
    active: boolean;
}

@connect(({ environment }) => environment)
export default class extends React.Component<IProps> {
    public render() {
        const { active, children, smallWindow } = this.props;

        return (
            <MetaPage active={active}>
                <Content>
                    <Wrapper smallWindow={smallWindow}>
                        {children}
                    </Wrapper>
                </Content>
                {!smallWindow && <SocialMediaLinks />}
            </MetaPage>
        );
    }
}
