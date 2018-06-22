import { lighten } from "polished";
import * as React from "react";
import styled from "styled-components";

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
    margin-right: 0.2em;
`;

const Label = styled.div`
    margin-right: 0.2em;
    text-transform: capitalize;
`;

interface IProps {
    color?: string;
    icon: JSX.Element;
    onClick: () => void;
}

export default class extends React.Component<IProps> {
    public render() {
        const { children, color, icon, onClick } = this.props;

        return (
            <Button color={color || "black"} onClick={onClick}>
                <Icon>{icon}</Icon>
                <Label>{children}</Label>
            </Button>
        );
    }
}
