

// CONCAT() METHOD ---->  


// The concat() method concatenates (joins) two or more arrays.
// The concat() method returns a new array, containing the joined arrays.
// The concat() method does not change the existing arrays.
// the concat() method use to join two or mor strings together.


let arr = [1,2,[1,2,3,4],[[1,2]]];

let newArr = [].concat(...arr)

console.log(newArr)



// OUTPUT ---->  [ 1,2,1,2,3,4,[1,2] ]


