// Write a program that prints the numbers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".

// function count() {
//     for (let i = 0; i <= 100; i++) {
//         if (i % 3 == 0) {
//             return 'FIZZ'
//         } else if ( i % 5 == 0) {
//             return 'Buzz'
//         } else if ( i % 15 == 0) {
//             return 'FizzBuzz'
//         } else {
//             return i
//         }
//     }
// }
// console.log(count)

for (let i = 0; i <= 100; i++){
    if (i % 3 == 0){
        console.log('Fizz')
    } else if (i % 5 == 0) {
        console.log('Buzz')
    } else if (i % 15 == 0) {
        console.log('FizzBuzz')
    } else {
        console.log(i)
    }
}