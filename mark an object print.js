// let marks={
//     ghansham:56,
//     amit:55,
//     rahul:66
// }
// for(let i in marks){
//     console.log("the marks of "+i  +"is "+ marks[i]);
// }

//2nd method

// /*

let marks={
    ghansham:56,
    amit:55,
    rahul:66
}
for(let i=0;i<Object.keys(marks).length;i++){
    console.log("The marks of "+ Object.keys(marks)[i]+" is "+marks[Object.keys(marks)[i]])
}

// */