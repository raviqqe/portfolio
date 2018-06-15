import { css, injectGlobal, InterpolationValue } from "styled-components";

injectGlobal`
    @import url('https://fonts.googleapis.com/css?family=Khand');

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
            margin-top: ${margin};

            &:first-child {
                margin-top: 0;
            }
        }
    `;
}

export function horizontalMargin(margin: string): InterpolationValue[] {
    return css`
        > * {
            margin-left: ${margin};

            &:first-child {
                margin-left: 0;
            }
        }
    `;
}
