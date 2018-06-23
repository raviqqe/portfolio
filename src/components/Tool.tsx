import * as React from "react";
import styled from "styled-components";

import { verticalMargin } from "../style";
import Image from "./Image";

const Tool = styled.div`
    font-size: 1.5em;
    display: flex;
    flex-direction: column;
    align-items: center;
    ${verticalMargin("0.3em")}
`;

interface IProps {
    image: string;
}

export default class extends React.Component<IProps> {
    public render() {
        const { children, image } = this.props;

        return (
            <Tool>
                <Image height="3.5em" src={image} />
                <div>{children}</div>
            </Tool>
        );
    }
}
