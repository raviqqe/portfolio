const widthQuery = matchMedia("(max-width: 900px)");

export const smallWindow: boolean = !!widthQuery.matches;

export function onWindowSizeChange(callback: (smallWindow: boolean) => void): void {
    widthQuery.addListener(({ matches }) => callback(!!matches));
}
