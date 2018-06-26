import * as React from "react";
import Book = require("react-icons/lib/fa/book");
import Cubes = require("react-icons/lib/fa/cubes");
import GitHub = require("react-icons/lib/fa/github");
import Rocket = require("react-icons/lib/fa/rocket");
import styled from "styled-components";

import { Page } from "../domain";
import { verticalMargin } from "../style";
import Button from "./Button";

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
                <Button
                    icon={<Rocket />}
                    page={Page.About}
                />
                <Button
                    icon={<Cubes />}
                    page={Page.Projects}
                />
                <Button
                    icon={<GitHub />}
                    page={Page.Contribution}
                />
                <Button
                    icon={<Book />}
                    page={Page.Skills}
                />
            </Menu>
        );
    }
}
