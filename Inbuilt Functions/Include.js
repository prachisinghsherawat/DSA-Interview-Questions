

// INCLUDE() METHOD ------>


// The includes() method returns true if an array contains a specified value.
// The includes() method returns false if the value is not found.
// The includes() method is case sensitive.


let arr = [[1,2,3] , [1,3] , [1,2,3,2,3]];

let count = 0;

for(let i=0 ;i<arr.length ;i++){
  if(arr[i].includes(3) && arr[i].includes(2)){
    count++
  }
}

console.log(count)



// OUTPUT ------> 2


