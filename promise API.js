let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Value 1")
    }, 10000);
})

let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Value 2")
        
        //reject(new Error("Error come"));

    }, 3000);
})

let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Value 3")
    }, 4000);
})

//------------------------------
//1.Promise.all method

let pm1 = Promise.all([p1,p2,p3])
pm1.then((value) => {
    console.log(value);
})

//--------------------------------
// 2.Promise.allSettled method

let pm2 = Promise.allSettled([p1,p2,p3])
pm2.then((value) => {
    console.log(value);
})

//--------------------------------
// 3.Promise.race method

let pm3 = Promise.race([p1,p2,p3])
pm3.then((value) => {
    console.log(value);
})

//--------------------------------
// 4.Promise.any method

let pm4 = Promise.any([p1,p2,p3])
pm4.then((value) => {
    console.log(value);
})

//--------------------------------
// 5.Promise.resolve method

let pm5 = Promise.resolve(65)

//--------------------------------
// 2.Promise.reject method

let pm6 = Promise.reject(new Error("hey i am new error"))