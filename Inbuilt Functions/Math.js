


// MATH() METHOD ----->

// Math.random() returns a random number between 0 (inclusive), and 1 (exclusive):



let arr = []

for(let i=0 ;i<5 ;i++){

    let bag = [];

    for(let j=0 ;j<5 ;j++){

        bag.push(Math.floor(Math.random()*100))
    }
    arr.push(bag)

}

console.log(arr)


// OUTPUT -----> [ "" , "" , "" , "" , "" ]
//               [ "" , "" , "" , "" , "" ]
//               [ "" , "" , "" , "" , "" ]
//               [ "" , "" , "" , "" , "" ]
//               [ "" , "" , "" , "" , "" ]




