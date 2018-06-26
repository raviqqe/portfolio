import * as React from "react";
import styled from "styled-components";

const Page = styled.div<{ backgroundImage: string }>`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    background-image: url("${({ backgroundImage }) => backgroundImage}");
    background-size: cover;
`;

const Content = styled.div`
    padding: 3em 4em;
    max-width: 60em;
    max-height: 100%;
    overflow: auto;
`;

interface IProps {
    backgroundImage: string;
}

export default class extends React.Component<IProps> {
    public render() {
        const { backgroundImage, children } = this.props;

        return (
            <Page backgroundImage={backgroundImage}>
                <Content>
                    {this.props.children}
                </Content>
            </Page>
        );
    }
}
