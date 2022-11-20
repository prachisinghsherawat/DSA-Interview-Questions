// Binary Number

let N = 6;
let bag = ""
let rev = ""


while(N>0){
  
  bag += N %2
  N= Math.floor(N/2)
}

let bit = 31 -bag.length

for(let i=0 ;i<bit ;i++){
  bag += "0"
}

//console.log(bag ,bag.length)

for(let i=bag.length-1 ;i>=0 ;i--){
  rev += bag[i]
}

console.log(rev.length , rev);
