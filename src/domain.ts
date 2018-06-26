export enum Page {
    About = "about",
    Projects = "projects",
    Contribution = "contribution",
    Skills = "skills",
}

export const colors = {
    [Page.About]: "darkorange",
    [Page.Projects]: "firebrick",
    [Page.Contribution]: "steelblue",
    [Page.Skills]: "olivedrab",
};

export const masks = {
    [Page.About]: require("./images/about.svg"),
    [Page.Projects]: require("./images/projects.svg"),
    [Page.Contribution]: require("./images/contribution.svg"),
    [Page.Skills]: require("./images/skills.svg"),
};

export const backgroundLightness = {
    [Page.About]: 0.35,
    [Page.Projects]: 0.5,
    [Page.Contribution]: 0.4,
    [Page.Skills]: 0.5,
};
