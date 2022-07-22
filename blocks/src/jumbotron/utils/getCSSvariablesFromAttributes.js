/**
 * Generate CSS variables based on block attributes
 * @param {Object} attributes Block attributes
 * @returns Object containing CSS variables
 */
export default function getCSSVariablesFromAttributes({
    height,
    width,
    padding,
    backgroundColor,
    backButtonBackgroundColor,
    backButtonIconColor,
    backButtonMargin,
    renderedHeight,
    renderedWidth
}) {
    return {
        "--jumbotron-height": height,
        "--jumbotron-width": width,
        "--jumbotron-padding": padding,
        "--jumbotron-background-color": backgroundColor,
        "--jumbotron-back-button-background-color": backButtonBackgroundColor,
        "--jumbotron-back-button-icon-color": backButtonIconColor,
        "--jumbotron-back-button-margin": backButtonMargin,
        "--jumbotron-rendered-height": `${renderedHeight}px`,
        "--jumbotron-rendered-width": `${renderedWidth}px`
    };
}