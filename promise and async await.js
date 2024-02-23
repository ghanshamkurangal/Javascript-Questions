 // promise 
 // example getcheese => makedough => makepizza.

function getCheese(){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            const cheese = "🧀";
            resolve(cheese)
        }, 4000);
       
    })
}

function makeDough(cheese){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            const dough = cheese + "🍩";
            resolve(dough);
            //reject("bad cheese",cheese);      // if you want to throw error 
        }, 2000);
        
    })
}

function makePizza(dough) {
    return new Promise ((resolve, reject) =>{
        setTimeout(() =>{
            const pizza = dough + "🍕";
            resolve(pizza);
        }, 2000);
    });
    
}


//---------------------------------
// .then() & .catch() method 

// getCheese()
// .then((cheese) =>{
//     console.log("here is Cheese",cheese);
//     return makeDough(cheese)
// })
// .then((dough) => {
//     console.log("here is dough", dough);
//     return makePizza(dough);
// })
// .then((pizza) => {
//     console.log("here is Pizza", pizza);
// })
// .catch((data) => {
//     console.log("error come", data);
// })

//-------------------------------------------


// async & await method use

async function orderPizza(){
    try{                                          // try catch is use for erroe handaling.
        let cheese = await getCheese();          // await means whenever they ready then it is come while they can't go forward.
        console.log("Cheese is ready",cheese);

        let dough = await makeDough(cheese);
        console.log("Dough is ready",dough);

        let pizza = await makePizza(dough);
        console.log("Pizza is ready",pizza);
    }catch(err){
        console.log("error is come",err);
    }
}

console.log(orderPizza());


//-------------------------------------------


