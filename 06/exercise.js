// Create a function that takes a variable number of arguments, each argument representing the number of items in a group. The function should return the number of permutations (combinations) of choices you would have if you selected one item from each group.
// Examples

// combinations(2, 3) ➞ 6

// combinations(3, 7, 4) ➞ 84

// combinations(2, 3, 4, 5) ➞ 120

function combinations(...arg){
    let a = [...arg]
    let b = 1
    //console.log(a)
    for (let i = 0; i < a.length; i++) {
        if (a[i] === 0) {
            console.log('It is ero')
        } else {
           console.log(b *= a[i]) 
        }
    }
}

combinations(2, 3)

combinations(3, 7, 4)


// function find(...arg) {
//     let a = [...arg]
//     let b = 
// }