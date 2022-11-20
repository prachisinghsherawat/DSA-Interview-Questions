let arr = ["priya", 0 ,"", false, null,undefined, "ate", NaN ,9 ]

//output = ["priya","ate",9];

let bag = [];

for(let i=0 ;i<arr.length ;i++){
  if(arr[i]){
    bag.push(arr[i])
  }
}


console.log(bag)


let valu =11;

5%3==0 ? console.log("yes"): 11%5==0 ? console.log("some") : console.log("prachu")
