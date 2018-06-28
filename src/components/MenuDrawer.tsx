import * as React from "react";
import Book = require("react-icons/lib/fa/book");
import Cubes = require("react-icons/lib/fa/cubes");
import GitHub = require("react-icons/lib/fa/github");
import Rocket = require("react-icons/lib/fa/rocket");
import styled from "styled-components";

import { PageId } from "../domain";
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
                    pageId={PageId.About}
                />
                <Button
                    icon={<Cubes />}
                    pageId={PageId.Projects}
                />
                <Button
                    icon={<GitHub />}
                    pageId={PageId.Contribution}
                />
                <Button
                    icon={<Book />}
                    pageId={PageId.Skills}
                />
            </Menu>
        );
    }
}
