import { lighten } from "polished";
import * as React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { Page } from "../domain";
import { actionCreators, IActionCreators } from "../state/page";

const Button = styled.button<{ color: string }>`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;

    padding: 0.5em 1em;

    font: inherit;
    font-size: 1.1em;
    color: white;
    background: ${({ color }) => color};
    border: none;
    user-select: none;

    &:hover {
        background: ${({ color }) => lighten(0.2, color)};
    }
`;

const Icon = styled.div`
    font-size: 1.5em;
    line-height: 0;
    margin-right: 0.3em;
`;

const Label = styled.div`
    margin-right: 0.2em;
    text-transform: capitalize;
`;

interface IProps extends Partial<IActionCreators> {
    color: string;
    icon: JSX.Element;
    page: Page;
}

@connect(null, actionCreators)
export default class extends React.Component<IProps> {
    public render() {
        const { color, icon, page, setPage } = this.props;

        return (
            <Button color={color || "black"} onClick={() => setPage(page)}>
                <Icon>{icon}</Icon>
                <Label>{page}</Label>
            </Button>
        );
    }
}
