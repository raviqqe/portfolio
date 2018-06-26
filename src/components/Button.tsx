import { lighten } from "polished";
import * as React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { colors, Page } from "../domain";
import { actionCreators, IActionCreators } from "../state/page";
import { instantDuration } from "../style";

const Button = styled.button<{ active: boolean, color: string }>`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;

    padding: 0.5em 1em;

    font: inherit;
    font-size: 1.2em;
    color: white;
    background: ${({ color }) => color};
    border: none;
    user-select: none;
    transition: font-size ${instantDuration}, transform ${instantDuration};
    transform: translateX(${({ active }) => active ? 1 : 0}em);

    &:hover {
        background: ${({ color }) => lighten(0.2, color)};
    }
`;

const Pad = styled.div`
    position: absolute;
    z-index: -1;
    left: -1em;
    top: 0;
    width: 100%;
    height: 100%;
    background: inherit;
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
    active?: boolean;
    icon: JSX.Element;
    page: Page;
}

@connect((state, props) => ({ active: state.page.page === props.page }), actionCreators)
export default class extends React.Component<IProps> {
    public render() {
        const { active, icon, page, setPage } = this.props;

        return (
            <Button active={active} color={colors[page]} onClick={() => setPage(page)}>
                <Pad />
                <Icon>{icon}</Icon>
                <Label>{page}</Label>
            </Button>
        );
    }
}
