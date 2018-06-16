import * as React from "react";
import styled from "styled-components";

import { horizontalMargin } from "../style";

const Header = styled.div`
    ${horizontalMargin("0.5em")}
    display: flex;
    align-items: flex-end;
    flex-wrap: wrap;
    padding: 1em 1.5em;
`;

const Name = styled.h1`
    font-size: 4em;
    margin-top: 0;
    margin-bottom: 0;
`;

const Description = styled.div`
    font-size: 2em;
    margin-bottom: 0.5em;
`;

export default class extends React.Component {
    public render() {
        return (
            <Header>
                <Name>Yota Toyama</Name>
                <Description>Full-stack developer and AI enthusiast</Description>
            </Header>
        );
    }
}
