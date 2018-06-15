import * as React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import * as domain from "../domain";
import Header from "./Header";
import PageButtons from "./PageButtons";
import WorksPage from "./WorksPage";

const App = styled.div`
    width: 100%;
    height: 100%;
`;

const Content = styled.div`
    display: flex;
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
