import {
    generateFromPercentConverter
} from "../../../shared_utils/converter.js";
import toFixed from "../../../shared_utils/toFixed.js";

/**
 * Get the coordinates of a corner
 * @param {number} cornerIndex Index of the corner to be updated
 * @param {Object} attributes Block attributes
 * @param {number} jumbotronRenderedWidth Jumbotron width in px
 * @param {number} jumbotronRenderedHeight Jumbotron height in px
 * @returns Coordinates of the corner at cornerIndex in px
 */
export default function getCornerPosition(cornerIndex, attributes, jumbotronRenderedWidth, jumbotronRenderedHeight) {
    const fromPercent = generateFromPercentConverter(jumbotronRenderedWidth, jumbotronRenderedHeight);

    const [x, y] = attributes.corners[cornerIndex];
    return fromPercent(x, y);
}