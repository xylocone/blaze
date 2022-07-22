/**
 * Generate a converter function that converts to percentage values
 * @param {number} width Reference width
 * @param {number} height Reference height
 * @returns A function that converts px coords into percentage
 */
export function generateToPercentConvereter(width, height) {
    return (x, y) => {
        return [100 * x / width, 100 * y / height]
    }
}

/**
 * Generate a converter function that converts from percentage values
 * @param {number} width Reference width
 * @param {number} height Reference height
 * @returns A function that converts percentages to px coords
 */
export function generateFromPercentConverter(width, height) {
    return (x, y) => {
        return [x * width / 100, y * height / 100]
    }
}