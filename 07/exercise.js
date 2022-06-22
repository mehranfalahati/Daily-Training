// ### Rain Drops
// Write a method in Javascript called raindrops that takes a number and returns a string based on whether or not the number has a factor of 3, 5 or 7 (or some combination of the three).

// - If the number is divisible by 3, the method returns "Pling".
// - If the number is divisible by 5, the method returns "Plang".
// - If the number is divisible by 7, the method returns "Plong".
// - If the number is divisible by more than one of the above, the method returns their **sounds combined**.
// - If the number is not divisible by 3, 5 or 7, the method just returns the number.


// ### Examples:
// ``` JS
// raindrops(28) // => "Plong"
// raindrops(35) // => "PlangPlong"
// raindrops(26) // => "26"
// ```

// #### Bonus:
// If you have time to spare and don't want to sit around twiddling your thumbs...
// - Make your raindrops function take an additional input that contains a series of phrases (like 'Beep', 'Boop' and 'Bop') and divisors (like 3, 5 & 7).
// - Instead of returning 'Pling', 'Plang', and/or 'Plong', make your function return the provided phrases, based on the divisors provided.
// - Ask me if you'd like clarification.
// - Tip: consider using arrays and loops (which we haven't discussed in class yet).

// I'd like to emphasise that this is several steps more difficult than the base question so do not worry at all if this bonus doesn't make sense to you yet.
// We will not be reviewing the bonus at the end of the warmup.



const raindrops = function(num) {
    if (num % 3 === 0) {
        console.log('PLING')
    } else if (num % 5 === 0) {
        console.log('PLANG')
    } else if (num % 7 === 0) {
        console.log('PLONG')
    } else if (!num % 3 == 0 || num % 5 == 0 || num % 7 == 0) {
        console.log(num)
    } else if ((num % 3 === 0 && num % 5 === 0) || (num % 3 ===0 && num % 7 === 0) || (num % 5 === 0 && num % 7 === 0)) {
        console.log('COMBINED')
    }
}


raindrops(28)
raindrops(35)
raindrops(26)