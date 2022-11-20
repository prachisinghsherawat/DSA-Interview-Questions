
// prachi singh sherawat ---------------> Prachi Singh Sherawat




let str = "prachi singh sherawat"


const FirstCap = (str) => {

  return str.replaceAll(/\S*/g ,(word) => `${word.slice(0,1).toUpperCase() }${word.slice(1).toLowerCase() }` )
  
}

console.log(FirstCap(str))
