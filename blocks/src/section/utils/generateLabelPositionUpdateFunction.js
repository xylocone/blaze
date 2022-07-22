import confineMovement from "../../../shared_utils/confineMovement.js";
import {
    generateToPercentConvereter
} from "../../../shared_utils/converter.js"
import generateUpdateAttributeFunction from "../../../shared_utils/generateUpdateAttributeFunction.js";
/**
 * Generate a function that can update the label position
 * @param {Function} setAttributes Block setAttributes function
 * @param {Number} jumbotronRenderedWidth Jumbotron rendered width
 * @param {Number} jumbotronRenderedHeight Jumbotron rendered height
 * @returns A function that updates the label position
 */
export default function generateLabelPositionUpdateFunction(setAttributes, jumbotronRenderedWidth, jumbotronRenderedHeight, areCoordsInPercent = false) {
    const toPercent = generateToPercentConvereter(jumbotronRenderedWidth, jumbotronRenderedHeight);
    const updateAttribute = generateUpdateAttributeFunction(setAttributes);

    return (x, y) => {
        if (!areCoordsInPercent)[x, y] = toPercent(x, y);
        [x, y] = confineMovement(x, y);

        updateAttribute("labelPosition")([x, y]);
    }
}