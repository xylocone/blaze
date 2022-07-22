/**
 * Generate a function that returns a function that can update a particular attribute
 * @param {Function} setAttributes Block setAttributes function
 * @returns A function that updates returns a function that updates a given attribute
 */
export default function generateUpdateAttributeFunction(setAttributes) {
    return (attributeName) => {
        return (newValue) =>
            setAttributes({
                [attributeName]: newValue,
            });
    }
}