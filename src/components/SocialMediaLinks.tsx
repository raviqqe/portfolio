import * as React from "react";
import GitHub = require("react-icons/lib/fa/github");
import LinkedIn = require("react-icons/lib/fa/linkedin-square");
import Twitter = require("react-icons/lib/fa/twitter");
import styled from "styled-components";

import SocialMediaLink from "./SocialMediaLink";

const Links = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-right: 1em;

    > * {
        margin: 0.1em;
    }
`;

export default class extends React.Component {
    public render() {
        return (
            <Links>
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
