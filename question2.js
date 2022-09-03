



const obj = {

    notification: {
        id: 1,
        name: "Alert Notification"
    },
    edge: {
        id: 2,
        name: "Edge Instnces"
    },
    learn: {
        id: 3,
        name: "Learninng"
    },
    billing: {
        id: 4,
        name: "Billing"
    },
    ticketing: {
        id: 5,
        name: "Ticketing"
    },
    orders: {
        id: 6,
        name: "Open Orders"
    }

};

let arr = [];


const CheckNames = (obj) => {

  for(let key in obj){
      
    if(typeof obj[key] == "object"){
      CheckNames(obj[key])
    }
    else{
       arr.push(obj[key])
    }
  }
  
}

CheckNames(obj)

let sortedName = arr.sort((a,b) => a.name-b.name)
console.log(sortedName)






