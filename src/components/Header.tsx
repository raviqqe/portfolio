import * as React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import * as environment from "../state/environment";
import { horizontalMargin } from "../style";
import SocialMediaLinks from "./SocialMediaLinks";

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

@connect(({ environment }) => environment)
export default class extends React.Component<Partial<environment.IState>> {
    public render() {
        const { smallWindow } = this.props;

        return (
            <Header>
                <Name>Yota Toyama</Name>
                <Description>Full-stack developer and AI enthusiast</Description>
                {smallWindow && <SocialMediaLinks />}
            </Header>
        );
    }
}
