import * as React from "react";

import { Page } from "../domain";
import Button from "./Button";

interface IProps {
    icon: JSX.Element;
    page: Page;
    setPage: (page: Page) => void;
}

export default class extends React.Component<IProps> {
    public render() {
        const { icon, page, setPage } = this.props;

        return (
            <Button icon={icon} onClick={() => setPage(page)}>
                {page}
            </Button>
        );
    }
}
