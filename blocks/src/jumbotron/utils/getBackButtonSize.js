/**
 * Get the CSS size value from size label
 * @param {String} sizeString Size label
 * @returns Size of the back button icon in px as a String
 */
export default function getBackButtonIconSize(sizeString) {
    return ({
        small: "24px",
        medium: "36px",
        large: "48px"
    })[sizeString];
}