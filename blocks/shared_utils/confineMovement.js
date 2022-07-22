/**
 * Prevent coords to move out of boundaries
 * @param {number} x X coordinate
 * @param {number} y Y coordinate
 * @returns An array of coords confined to the range [0, 100]
 */
export default function confineMovement(x, y) {
    if (x < 0) x = 0;
    else if (x > 100) x = 100;

    if (y < 0) y = 0;
    else if (y > 100) y = 100;

    return [x, y];
}