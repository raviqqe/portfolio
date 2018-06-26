import { PageId } from "../domain";

export const titles = {
    [PageId.About]: "About",
    [PageId.Projects]: "Projects",
    [PageId.Contribution]: "Contribution",
    [PageId.Skills]: "Skills",
};

export const colors = {
    [PageId.About]: "darkorange",
    [PageId.Projects]: "firebrick",
    [PageId.Contribution]: "steelblue",
    [PageId.Skills]: "olivedrab",
};

export const masks = {
    [PageId.About]: require("../images/about.svg"),
    [PageId.Projects]: require("../images/projects.svg"),
    [PageId.Contribution]: require("../images/contribution.svg"),
    [PageId.Skills]: require("../images/skills.svg"),
};

export const backgroundLightness = {
    [PageId.About]: 0.35,
    [PageId.Projects]: 0.5,
    [PageId.Contribution]: 0.4,
    [PageId.Skills]: 0.5,
};
