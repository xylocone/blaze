import confineMovement from "../../../shared_utils/confineMovement.js";
import {
    generateToPercentConvereter
} from "../../../shared_utils/converter.js";
import toFixed from "../../../shared_utils/toFixed.js";

/**
 * A higher-order function to generate a function that updates corners
 * @param {integer} cornerIndex Index of the corner which is to be updated
 * @param {Object} attributes Block attributes
 * @param {Function} setAttributes Block setAttributes function
 * @param {number} jumbotronRenderedWidth Width of the parent jumbotron block
 * @param {number} jumbotronRenderedHeight Height of the parent jumbotron block
 * @param {boolean} areCoordsInPercent Is the input already a percentage?
 * @returns A function to update the corner corresponding to cornerIndex
 */
export default function generateCornerUpdateFunction(cornerIndex, attributes, setAttributes, jumbotronRenderedWidth, jumbotronRenderedHeight, areCoordsInPercent = false) {

    const toPercent = generateToPercentConvereter(jumbotronRenderedWidth, jumbotronRenderedHeight);

    return (x, y) => {
        if (!areCoordsInPercent)[x, y] = toPercent(x, y);
        [x, y] = confineMovement(x, y);
        [x, y] = [toFixed(x, 2), toFixed(y, 2)].map(str => parseFloat(str, 10));

        setAttributes({
            "corners": [
                ...attributes.corners.slice(0, cornerIndex),
                [x, y],
                ...attributes.corners.slice(cornerIndex + 1),
            ]
        });
    };
}