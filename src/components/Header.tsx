import * as React from "react";
import styled from "styled-components";

const Header = styled.div`
    display: flex;
    align-items: flex-start;
`;

const Name = styled.h2`
    font-size: 2em;
`;

const Description = styled.div`
    font-size: 1.2em;
`;

export default class extends React.Component {
    public render() {
        return (
            <Header>
                <Name>Yota Toyama</Name>
                <Description>
                    Full-stack developer and AI enthusiast.
                </Description>
            </Header>
        );
    }
}
