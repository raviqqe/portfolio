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
import SkillsPage from "./SkillsPage";

const App = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
`;

@connect(({ page }) => page)
export default class extends React.Component<Partial<page.IState>> {
    public render() {
        return (
            <App>
                <Menu />
                {{
                    [Page.About]: <AboutPage />,
                    [Page.Contribution]: <ContributionPage />,
                    [Page.Skills]: <SkillsPage />,
                    [Page.Projects]: <ProjectsPage />,
                }[this.props.page]}
            </App>
        );
    }
}
