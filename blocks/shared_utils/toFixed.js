/**
 * Fix the number of decimal places on a number, given either as Number of String
 * @param {Number | String} num Number/String to be converted
 * @param {Number} decimalPlaces Number of decimal places in the result
 * @returns Passed number with the given fixed number of decimal places, as a String
 */
export default function toFixed(num, decimalPlaces) {
    return parseFloat(`${num}`, 10).toFixed(decimalPlaces);
}