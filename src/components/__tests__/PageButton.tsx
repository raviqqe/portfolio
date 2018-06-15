import { render, shallow } from "enzyme";
import * as React from "react";
import Add = require("react-icons/lib/md/add");

import { Page } from "../../domain";
import PageButton from "../PageButton";

test("Render a component", () => {
    shallow(<PageButton icon={<Add />} page={Page.Works} setPage={() => undefined} />);
});

test("Render proper text", () => {
    const element = render(
        <PageButton
            icon={<Add />}
            page={Page.Works}
            setPage={() => undefined}
        />,
    );

    expect(element.text()).toBe("works");
});
