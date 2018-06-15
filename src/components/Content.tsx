import * as React from "react";
import styled from "styled-components";

const Content = styled.div`
    border: 2px solid black;
`;

const Titles = styled.div`
    display: flex;
    align-items: flex-end;
`;

const Title = styled.h2`
    font-size: 2em;
`;

const Subtitle = styled.div`
    font-size: 1.2em;
`;

interface IProps {
    title: string;
    subtitle: string;
}

export default class extends React.Component<IProps> {
    public render() {
        const { children, title, subtitle } = this.props;

        return (
            <Content>
                <Titles>
                    <Title>{title}</Title>
                    <Subtitle>{subtitle}</Subtitle>
                </Titles>
                {children}
            </Content>
        );
    }
}
