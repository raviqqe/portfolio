import * as React from "react";
import styled from "styled-components";

const Header = styled.div`
    display: flex;
    align-items: flex-start;
`;

const Name = styled.h2`
    font-size: 2em;
`;

const Description = styled.div`
    font-size: 1.2em;
`;

interface IProps {
    description: string;
    name: string;
}

export default class extends React.Component<IProps> {
    public render() {
        const { description, name } = this.props;

        return (
            <Header>
                <Name>{name}</Name>
                <Description>{description}</Description>
            </Header>
        );
    }
}
