// Check for Anagram

let str1 = "abcd";
let str2 = "bcda";

str2 = str2.split("").sort().join("");

if(str1==str2){
  console.log("Yes")
}

else{
  console.log("No")
}
