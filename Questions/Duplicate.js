// Find Duplicate

let N = 5 ;
let arr = [1,2,3,4,3];

// --------------- UNOPTIMIZED ------------------------>

//arr = arr.sort((a,b) => a-b)

// for(let i=0 ;i<N ;i++){
//   if(arr[i] == arr[i+1]){
//     console.log(arr[i])
//   }
// }


// ----------------- OPTIMIZED ------------------------->

let obj = {};
for(let i=0 ; i<N ;i++){

  if(obj[arr[i]] == undefined){
    obj[arr[i]] = 1;
  }

  else{
    obj[arr[i]]++;
  }
}

for(let key in obj){
  if(obj[key]>= 2){
    console.log(key)
  }
}
