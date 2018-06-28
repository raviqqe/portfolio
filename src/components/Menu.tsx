import * as React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import * as environment from "../state/environment";
import * as page from "../state/page";
import { shortDuration } from "../style";
import MenuButton from "./MenuButton";
import MenuDrawer from "./MenuDrawer";

const DrawerWrapper = styled.div<{ open: boolean }>`
    display: flex;
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    visibility: ${({ open }) => open ? "visible" : "hidden"};
    opacity: ${({ open }) => open ? 1 : 0};
    transition: opacity ${shortDuration}, visibility ${shortDuration};

    > * {
        transform: translateX(${({ open }) => open ? "0" : "-100%"});
        transition: transform ${shortDuration};
    }
`;

const Background = styled.div`
    flex: 1;
`;

type IProps = Partial<environment.IState> & Partial<page.IState>;

interface IState {
    open: boolean;
}

@connect(({ environment, page }) => ({ ...environment, ...page }))
export default class extends React.Component<IProps, IState> {
    public state: IState = { open: false };

    public render() {
        const { smallWindow } = this.props;
        const { open } = this.state;

        if (smallWindow) {
            return [
                <MenuButton
                    key="button"
                    open={open}
                    openMenu={() => this.setState({ open: true })}
                />,
                <DrawerWrapper key="drawer" open={open}>
                    <MenuDrawer />
                    <Background onClick={() => this.setState({ open: false })} />
                </DrawerWrapper>,
            ];
        }

        return <MenuDrawer />;
    }

    public componentDidUpdate({ currentPageId }: IProps) {
        if (currentPageId !== this.props.currentPageId) {
            this.setState({ open: false });
        }
    }
}
