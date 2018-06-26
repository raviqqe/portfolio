import { css, injectGlobal, InterpolationValue } from "styled-components";

export const instantDuration = "0.05s";

injectGlobal`
    @import url('https://fonts.googleapis.com/css?family=Khand');
    @import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');

    * {
        box-sizing: border-box;
    }

    body {
        font: 18px Khand, sans-serif;
        width: 100vw;
        height: 100vh;
        padding: 0;
        margin: 0;
        background: white;
    }

    div#root {
        width: 100%;
        height: 100%;
    }
`;

export function verticalMargin(margin: string): InterpolationValue[] {
    return css`
        > * {
            margin-top: 0;
            margin-bottom: ${margin};

            &:last-child {
                margin-bottom: 0;
            }
        }
    `;
}

export function horizontalMargin(margin: string): InterpolationValue[] {
    return css`
        > * {
            margin-left: 0;
            margin-right: ${margin};

            &:last-child {
                margin-right: 0;
            }
        }
    `;
}
