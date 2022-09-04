

// FREEZE() METHOD ----> 

// The Object.freeze() method freezes an object. 
// Freezing an object prevents extensions and makes existing properties non-writable and non-configurable.



let obj = {

    name : "Prachi",
    age : "20",
    city : "Ghaziabad"
}
  
let x = obj
  
Object.freeze(obj)
  
x.name = " Kukki"
console.log(x)


// OUTPUT ----> { name : 'Prachi' , age : '20' , city : 'Ghaziabad'}


