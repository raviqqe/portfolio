import * as React from "react";
import { connect } from "react-redux";

import { Page } from "../domain";
import { actionCreators, IActionCreators } from "../state/page";
import Button from "./Button";

interface IProps extends Partial<IActionCreators> {
    icon: JSX.Element;
    page: Page;
}

@connect(null, actionCreators)
export default class extends React.Component<IProps> {
    public render() {
        const { icon, page, setPage } = this.props;

        return <Button icon={icon} onClick={() => setPage(page)}>{page}</Button>;
    }
}
