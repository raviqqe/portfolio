import * as React from "react";
import ThreeBars = require("react-icons/lib/go/three-bars");
import styled from "styled-components";

import { shortDuration } from "../style";

const Button = styled.div<{ on: boolean }>`
    position: fixed;
    right: 1em;
    bottom: 1em;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 4em;
    height: 4em;
    border-radius: 4em;

    color: white;
    background: grey;
    box-shadow: 0 0.2em 0.3em rgba(0, 0, 0, 0.4);

    > svg {
        font-size: 2em;
        transform: rotate(${({ on }) => on ? 90 : 0}deg);
        transition: transform ${shortDuration};
    }
`;

interface IProps {
    open: boolean;
    openMenu: () => void;
}

export default class extends React.Component<IProps> {
    public render() {
        const { open, openMenu } = this.props;

        return <Button on={open} onClick={openMenu}><ThreeBars /></Button>;
    }
}
