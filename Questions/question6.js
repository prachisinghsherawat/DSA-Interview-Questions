let firstname = "Prachi"
let lastname = "Sherawat"

// firstname == "" ? console.log("") : console.log(firstname[0]?.toUpperCase())
// lastname == "" ? console.log("") : console.log(lastname[0]?.toUpperCase())



// if(firstname && lastname){
//   console.log(firstname[0]?.toUpperCase() + lastname[0]?.toUpperCase())
// }
// else if(!firstname && lastname){
//    console.log(lastname[0]?.toUpperCase())
// }
// else if (firstname && !lastname){
//   console.log(firstname[0]?.toUpperCase())
// }
// else{
//   console.log("")
// }


firstname && lastname ? console.log(firstname[0]?.toUpperCase() + lastname[0]?.toUpperCase()) : !firstname && lastname 
  ?  console.log(lastname[0]?.toUpperCase()) : firstname && !lastname ? console.log(firstname[0]?.toUpperCase()) : console.log("")
