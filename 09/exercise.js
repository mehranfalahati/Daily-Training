// Try finding your ancestors and offspring with code.

// Create a function that takes a number x and a character y ("m" for male, "f" for female), and returns the name of an ancestor (m/f) or descendant (m/f).

//     If the number is negative, return the related ancestor.
//     If positive, return the related descendant.
//     You are generation 0. In the case of 0 (male or female), return "me!".

// Examples

// generation(2, "f") ➞ "granddaughter"

// generation(-3, "m") ➞ "great grandfather"

// generation(1, "f") ➞ "daughter"

// Notes

// Check the Resources tab for helpful hints.
// Generation	Male	Female
// -3	great grandfather	great grandmother
// -2	grandfather	grandmother
// -1	father	mother
// 0	me!	me!
// 1	son	daughter
// 2	grandson	granddaughter
// 3	great grandson	great granddaughter

function generation(num, char) {
    if (num === -3 && char === 'm') {
        return 'great grandfather'
    } else if (num === -3 && char === 'f') {
        return 'great grandmother'
    } else if (num === -2 && char === 'm') {
        return 'grandfather'
    } else if (num === -2 && char === 'f') {
        return 'grandmother'
    } else if (num === -1 && char === 'm') {
        return 'father'
    } else if (num === -1 && char === 'f') {
        return 'mother'
    } else if (num === 1 && char === 'm') {
        return 'son'
    } else if (num === 1 && char === 'f') {
        return 'Daughter'
    } else if (num === 2 && char === 'm') {
        return 'grandson'
    } else if (num === 2 && char === 'f') {
        return 'granddaughter'
    } else if (num === 3 && char === 'm') {
        return 'great grandson'
    } else if (num === 3 && char === 'f') {
        return 'great granddaughter'
    } else if (num === 0 && (char === 'f' || char === 'm')) {
        return 'Me!'
    } else {
        return 'NOT A GENERATION!'
    }
}

console.log(generation(2, "f")) //"granddaughter"

console.log(generation(-3, "m")) //"great grandfather"

console.log(generation(1, "f")) // "daughter"

console.log(generation(0, "f"))

console.log(generation(8, "f"))