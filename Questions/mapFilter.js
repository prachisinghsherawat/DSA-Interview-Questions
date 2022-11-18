
let arr = [
 
  {
    name : "Prachi",
    gender : "Female",
    place : "Delhi"
  },
  {
    name : "Suresh",
    gender : "Male",
    place : "Hyderabad"
  },
  {
    name : "Ankit",
    gender : "male",
    place : "delhi"
  },
  {
    name : "Bhavesh",
    gender : "Male",
    place : "Mumbai"
  },
  {
    name : "Kukki",
    gender : "female",
    place : "Delhi"
  },
  {
    name : "Chiku",
    gender : "female",
    place : "Delhi"
  },
  {
    name : "Danish",
    gender : "Male",
    place : "Banglore"
  },
  {
    name : "Harshal",
    gender : "male",
    place : "banglore"
  }
]




let ans = arr.filter((el)=> el.place.toLowerCase() == "delhi")
console.log(ans)


let add = arr.map((el)=>{
  el["institute"] = "Masai"
  return el
})
console.log(add)


let fil = arr.filter((el)=> el.place.toLowerCase()== "delhi" && el.gender.toLowerCase()== "female")

console.log(fil)
