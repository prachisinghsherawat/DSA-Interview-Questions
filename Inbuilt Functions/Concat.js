

// CONCAT() METHOD ---->  

// concat function is used to join two or more strings together in javascript .



let arr = [1,2,[1,2,3,4],[[1,2]]];

let newArr = [].concat(...arr)

console.log(newArr)



// OUTPUT ---->  [ 1,2,1,2,3,4,[1,2] ]


