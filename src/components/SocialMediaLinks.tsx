import * as React from "react";
import GitHub = require("react-icons/lib/fa/github");
import LinkedIn = require("react-icons/lib/fa/linkedin-square");
import Twitter = require("react-icons/lib/fa/twitter");
import styled from "styled-components";

import SocialMediaLink from "./SocialMediaLink";

const Links = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    > * {
        margin: 0.1em;
    }
`;

const QiitaIcon = styled.div`
    font-family: sans-serif;
`;

export default class extends React.Component {
    public render() {
        return (
            <Links>
                <SocialMediaLink
                    href="https://github.com/raviqqe"
                    icon={<GitHub />}
                />
                <SocialMediaLink
                    href="https://twitter.com/raviqqe"
                    icon={<Twitter />}
                />
                <SocialMediaLink
                    href="https://www.linkedin.com/in/yota-toyama-29b313bb/"
                    icon={<LinkedIn />}
                />
                <SocialMediaLink
                    href="https://qiita.com/raviqqe"
                    icon={<QiitaIcon>Q</QiitaIcon>}
                />
            </Links>
        );
    }
}
