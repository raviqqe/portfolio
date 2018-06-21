import * as React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { Page } from "../domain";
import * as page from "../state/page";
import { horizontalMargin } from "../style";
import AboutPage from "./AboutPage";
import ContributionPage from "./ContributionPage";
import Header from "./Header";
import Menu from "./Menu";
import ProjectsPage from "./ProjectsPage";
import StudyPage from "./StudyPage";

const App = styled.div`
    width: 100%;
    max-width: 75rem;
    height: 100%;
    margin: auto;
    padding: 1em;
    overflow: auto;
`;

const Content = styled.div`
    ${horizontalMargin("1em")}
    display: flex;
    align-items: flex-start;
`;

@connect(({ page }) => page)
export default class extends React.Component<Partial<page.IState>> {
    public render() {
        return (
            <App>
                <Header />
                <Content>
                    <Menu />
                    {{
                        [Page.About]: <AboutPage />,
                        [Page.Contribution]: <ContributionPage />,
                        [Page.Study]: <StudyPage />,
                        [Page.Projects]: <ProjectsPage />,
                    }[this.props.page]}
                </Content>
            </App>
        );
    }
}
