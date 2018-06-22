import * as React from "react";
import Book = require("react-icons/lib/fa/book");
import Cubes = require("react-icons/lib/fa/cubes");
import GitHub = require("react-icons/lib/fa/github");
import Rocket = require("react-icons/lib/fa/rocket");
import styled from "styled-components";

import { Page } from "../domain";
import { verticalMargin } from "../style";
import PageButton from "./PageButton";
import SocialMediaLinks from "./SocialMediaLinks";

const Menu = styled.div`
    display: flex;
    flex-direction: column;

    > * {
        flex: 1;
    }
`;

export default class extends React.Component {
    public render() {
        return (
            <Menu>
                <PageButton
                    icon={<Rocket />}
                    page={Page.About}
                />
                <PageButton
                    icon={<Cubes />}
                    page={Page.Projects}
                />
                <PageButton
                    icon={<GitHub />}
                    page={Page.Contribution}
                />
                <PageButton
                    icon={<Book />}
                    page={Page.Study}
                />
            </Menu>
        );
    }
}
