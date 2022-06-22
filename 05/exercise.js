// Create a function that takes an array of numbers and return "Boom!" if the digit 7 appears in the array. Otherwise, return "there is no 7 in the array".
// Examples

// sevenBoom([1, 2, 3, 4, 5, 6, 7]) ➞ "Boom!"
// // 7 contains the number seven.

// sevenBoom([8, 6, 33, 100]) ➞ "there is no 7 in the array"
// // None of the items contain 7 within them.

// sevenBoom([2, 55, 60, 97, 86]) ➞ "Boom!"
// // 97 contains the number seven.

function sevenBoom(arr) {
    array = arr.toString();
    // console.log(array)
    if (array.includes(7)) {
        console.log('BOOM!') 
    } else {
        console.log('There is no 7!')
    }
}

sevenBoom([1, 2, 3, 4, 5, 6, 7])

sevenBoom([8, 6, 33, 100])

sevenBoom([2, 55, 60, 97, 86])




function find(arr) {
    arr.forEach(array => {
        if (array === 7) {
            console.log('BOOM!')
        } else {
            console.log('There is no 7!')
        }
    });
}


find([1, 2, 3, 4, 5, 6, 7])