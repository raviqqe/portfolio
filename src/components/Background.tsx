import { lighten } from "polished";
import * as React from "react";
import styled from "styled-components";

import { backgroundLightness, colors, masks, Page } from "../domain";

const transitionMs = 300;

const Background = styled.div<{ color: string, mask: string }>`
    position: fixed;
    left: 0;
    top: 0;
    z-index: -1;
    width: 100vw;
    height: 100vh;
    background-color: ${({ color }) => color};
    mask-image: url("${({ mask }) => mask}");
    mask-size: cover;
    transition: background-color ${transitionMs}ms;
    transition-timing-function: linear;
`;

interface IProps {
    page: Page;
}

interface IState {
    color: string;
    mask: string;
}

export default class This extends React.Component<IProps> {
    private static convertPageToColor(page: Page): string {
        return lighten(backgroundLightness[page], colors[page]);
    }

    public state: IState = {
        color: This.convertPageToColor(Page.About),
        mask: masks[Page.About],
    };

    public render() {
        const { color, mask } = this.state;

        return <Background color={color} mask={mask} />;
    }

    public componentDidUpdate({ page }: IProps) {
        if (page !== this.props.page) {
            this.setState({ color: "transparent" });

            const { page } = this.props;

            setTimeout(() => this.setState({
                color: This.convertPageToColor(page),
                mask: masks[page],
            }), transitionMs);
        }
    }
}
