import * as React from "react";
import GitHub = require("react-icons/lib/fa/github");
import LinkedIn = require("react-icons/lib/fa/linkedin-square");
import Twitter = require("react-icons/lib/fa/twitter");
import { connect } from "react-redux";
import styled, { css } from "styled-components";

import * as environment from "../state/environment";
import SocialMediaLink from "./SocialMediaLink";

const largeWindowStyle = css`
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    padding-right: 1em;
    flex-direction: column;
`;

const Links = styled.div<{ smallWindow: boolean }>`
    display: flex;
    justify-content: center;
    ${({ smallWindow }) => smallWindow ? "" : largeWindowStyle}

    > * {
        margin: 0.1em;
    }
`;

@connect(({ environment }) => environment)
export default class extends React.Component<Partial<environment.IState>> {
    public render() {
        const { smallWindow } = this.props;

        return (
            <Links smallWindow={smallWindow}>
                <SocialMediaLink
                    color="black"
                    href="https://github.com/raviqqe"
                    icon={<GitHub />}
                />
                <SocialMediaLink
                    color="deepskyblue"
                    href="https://twitter.com/raviqqe"
                    icon={<Twitter />}
                />
                <SocialMediaLink
                    color="#0077B5"
                    href="https://www.linkedin.com/in/yota-toyama-29b313bb/"
                    icon={<LinkedIn />}
                />
            </Links>
        );
    }
}
