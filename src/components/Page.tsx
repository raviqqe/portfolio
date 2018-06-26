import * as React from "react";
import styled from "styled-components";

import { Page } from "../domain";
import { horizontalMargin } from "../style";
import MetaPage from "./MetaPage";

const Titles = styled.div`
    ${horizontalMargin("0.6em")}
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
`;

const Title = styled.h2`
    font-size: 3em;
    margin-top: 0;
    margin-bottom: 0;
    text-transform: capitalize;
`;

const Subtitle = styled.div`
    font-size: 1.5em;
    margin-bottom: 0.4em;
`;

interface IProps {
    active: boolean;
    page: Page;
    title: string;
    subtitle: string;
}

export default class extends React.Component<IProps> {
    public render() {
        const { active, children, page, title, subtitle } = this.props;

        return (
            <MetaPage active={active} page={page}>
                <Titles>
                    <Title>{title}</Title>
                    <Subtitle>{subtitle}</Subtitle>
                </Titles>
                {children}
            </MetaPage>
        );
    }
}
