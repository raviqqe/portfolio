import * as React from "react";
import styled from "styled-components";

const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;

    padding: 0.5em 1em;

    font: inherit;
    font-size: 1.1em;
    color: black;
    background: transparent;
    border: 2px solid black;
    user-select: none;
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
    icon: JSX.Element;
    onClick: () => void;
}

export default class extends React.Component<IProps> {
    public render() {
        const { children, icon, onClick } = this.props;

        return (
            <Button onClick={onClick}>
                <Icon>{icon}</Icon>
                <Label>{children}</Label>
            </Button>
        );
    }
}
