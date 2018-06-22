import * as React from "react";
import styled from "styled-components";

const Page = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
`;

const Content = styled.div`
    padding: 3em 4em;
    max-width: 60em;
    max-height: 100%;
    overflow: auto;
`;

export default class extends React.Component {
    public render() {
        return (
            <Page>
                <Content>
                    {this.props.children}
                </Content>
            </Page>
        );
    }
}
