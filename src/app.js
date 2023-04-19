export function sum (a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('your summands are not numbers')
    }
    return a + b
}