import * as React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { Page } from "../domain";
import * as page from "../state/page";
import { horizontalMargin } from "../style";
import AboutPage from "./AboutPage";
import Background from "./Background";
import ContributionPage from "./ContributionPage";
import Header from "./Header";
import Menu from "./Menu";
import ProjectsPage from "./ProjectsPage";
import SkillsPage from "./SkillsPage";

const App = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
`;

@connect(({ page }) => page)
export default class extends React.Component<Partial<page.IState>> {
    public render() {
        const { page } = this.props;

        return (
            <App>
                <Menu />
                <AboutPage active={page === Page.About} />
                <ProjectsPage active={page === Page.Projects} />
                <ContributionPage active={page === Page.Contribution} />
                <SkillsPage active={page === Page.Skills} />
                <Background page={page} />
            </App>
        );
    }
}
