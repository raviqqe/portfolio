import * as React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import * as domain from "../domain";
import { horizontalMargin } from "../style";
import Header from "./Header";
import PageButtons from "./PageButtons";
import WorksPage from "./WorksPage";

const App = styled.div`
    width: 100%;
    max-width: 1024px;
    height: 100%;
    margin: auto;
    padding: 1em;
`;

const Content = styled.div`
    ${horizontalMargin("1em")}
    display: flex;
    align-items: flex-start;
`;

@connect(({ page }) => page)
export default class extends React.Component {
    public render() {
        return (
            <App>
                <Header />
                <Content>
                    <PageButtons />
                    <WorksPage />
                </Content>
            </App>
        );
    }
}
