import * as React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import * as environment from "../state/environment";
import SocialMediaLinks from "./SocialMediaLinks";

const Header = styled.div<{ smallWindow: boolean }>`
    ${({ smallWindow }) => smallWindow ? "font-size: 0.8em;" : ""}
    display: flex;
    align-items: flex-end;
    flex-wrap: wrap;

    > * {
        margin: 0.2rem;
    }
`;

const Name = styled.h1`
    font-size: 4em;
    line-height: 1.05;
    margin-right: 0.5em;
`;

const Description = styled.div`
    font-size: 2em;
    line-height: 1.2;
    margin-bottom: 0.5rem;
`;

@connect(({ environment }) => environment)
export default class extends React.Component<Partial<environment.IState>> {
    public render() {
        const { smallWindow } = this.props;

        return (
            <Header smallWindow={smallWindow}>
                <Name>Yota Toyama</Name>
                <Description>Full-stack developer and AI enthusiast</Description>
                {smallWindow && <SocialMediaLinks />}
            </Header>
        );
    }
}
