import * as React from "react";
import styled from "styled-components";

import { horizontalMargin } from "../style";

const Page = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
`;

const Content = styled.div`
    padding: 1em 1.5em;
    max-width: 60em;
    max-height: 100%;
    overflow: auto;
`;

const Titles = styled.div`
    ${horizontalMargin("0.6em")}
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
`;

const Title = styled.h2`
    font-size: 2em;
    margin-top: 0;
    margin-bottom: 0;
    text-transform: capitalize;
`;

const Subtitle = styled.div`
    font-size: 1.2em;
    margin-bottom: 0.4em;
`;

interface IProps {
    title: string;
    subtitle: string;
}

export default class extends React.Component<IProps> {
    public render() {
        const { children, title, subtitle } = this.props;

        return (
            <Page>
                <Content>
                    <Titles>
                        <Title>{title}</Title>
                        <Subtitle>{subtitle}</Subtitle>
                    </Titles>
                    {children}
                </Content>
            </Page>
        );
    }
}
