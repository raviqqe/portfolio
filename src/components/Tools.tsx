import * as React from "react";
import styled from "styled-components";

const Tools = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0.5em 0;
`;

const Label = styled.h4`
    font-size: 2em;
    line-height: 1.2;
    margin: 0;
`;

const Content = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    > * {
        margin: 0.5em;
    }
`;

interface IProps {
    label: string;
}

export default class extends React.Component<IProps> {
    public render() {
        const { children, label } = this.props;

        return (
            <Tools>
                <Label>{label}</Label>
                <Content>{children}</Content>
            </Tools>
        );
    }
}
