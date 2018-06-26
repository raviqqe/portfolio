import { lighten } from "polished";
import * as React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { PageId } from "../domain";
import { actionCreators, IActionCreators } from "../state/page";
import { instantDuration } from "../style";
import { colors, titles } from "../style/themes";

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
    pageId: PageId;
}

@connect(
    (state, props: IProps) => ({ active: state.page.currentPageId === props.pageId }),
    actionCreators)
export default class extends React.Component<IProps> {
    public render() {
        const { active, icon, pageId, setCurrentPageId } = this.props;

        return (
            <Button active={active} color={colors[pageId]} onClick={() => setCurrentPageId(pageId)}>
                <Pad />
                <Icon>{icon}</Icon>
                <Label>{titles[pageId]}</Label>
            </Button>
        );
    }
}
