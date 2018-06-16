import * as React from "react";
import styled from "styled-components";

import { horizontalMargin, verticalMargin } from "../style";

const Page = styled.div`
    ${verticalMargin("0.5em")}
    border: 2px solid black;
    flex: 1;
    padding: 1em 1.5em;
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

const Content = styled.div`
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
                <Titles>
                    <Title>{title}</Title>
                    <Subtitle>{subtitle}</Subtitle>
                </Titles>
                <Content>
                    {children}
                </Content>
            </Page>
        );
    }
}
