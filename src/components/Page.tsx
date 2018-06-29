import * as React from "react";
import styled from "styled-components";

import { PageId } from "../domain";
import { horizontalMargin } from "../style";
import { titles } from "../style/themes";
import MetaPage from "./MetaPage";

const Titles = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;

    @media (min-width: 320px) {
        ${horizontalMargin("0.6em")}
    }
`;

const Title = styled.h2`
    font-size: 3em;
    margin-top: 0;
    margin-bottom: 0;
    text-transform: capitalize;
`;

const Subtitle = styled.div`
    font-size: 1.5em;
    line-height: 1.2;
    margin-bottom: 0.4em;
`;

interface IProps {
    active: boolean;
    pageId: PageId;
    subtitle: string;
}

export default class extends React.Component<IProps> {
    public render() {
        const { active, children, pageId, subtitle } = this.props;

        return (
            <MetaPage active={active}>
                <Titles>
                    <Title>{titles[pageId]}</Title>
                    <Subtitle>{subtitle}</Subtitle>
                </Titles>
                {children}
            </MetaPage>
        );
    }
}
