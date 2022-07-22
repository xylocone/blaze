/**
 * Generate CSS variables based on attributes
 * @param {Object} attributes Block attributes
 * @returns Object containing CSS variables
 */
export default function getCSSvariablesFromAttributes(attributes) {
    const {
        corners,
        backgroundColor,
        labelRotation,
        labelColor,
        labelFontFamily,
        labelFontSize,
    } = attributes;

    return {
        "--section-clip-path": getClipPath(corners),
        "--section-background-color": backgroundColor,
        "--section-label-rotation": `rotate(${labelRotation}deg)`,
        "--section-label-color": labelColor,
        "--section-label-font-family": labelFontFamily,
        "--section-label-font-size": `${labelFontSize}px`
    }
}

function getClipPath(corners) {
    if (corners.length < 3) return "none";
    return `polygon(${corners.map(([x, y]) => `${x}% ${y}%`).join(", ")})`;
}