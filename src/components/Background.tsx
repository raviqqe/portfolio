import { lighten } from "polished";
import * as React from "react";
import styled from "styled-components";

import { PageId } from "../domain";
import { backgroundLightness, colors, masks } from "../style/themes";

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
    pageId: PageId;
}

interface IState {
    color: string;
    mask: string;
}

export default class This extends React.Component<IProps> {
    private static convertPageToColor(pageId: PageId): string {
        return lighten(backgroundLightness[pageId], colors[pageId]);
    }

    public state: IState = {
        color: This.convertPageToColor(PageId.About),
        mask: masks[PageId.About],
    };

    public render() {
        const { color, mask } = this.state;

        return <Background color={color} mask={mask} />;
    }

    public componentDidUpdate({ pageId }: IProps) {
        if (pageId !== this.props.pageId) {
            this.setState({ color: "transparent" });

            const { pageId } = this.props;

            setTimeout(() => this.setState({
                color: This.convertPageToColor(pageId),
                mask: masks[pageId],
            }), transitionMs);
        }
    }
}
