// function check(arr) {
//     for(let i=0;i<=arr.length;i++){
//         let array = Array.isArray(arr)
//         if(array){
//             console.log("true");
//         }    
//         else{
//             console.log("false");
//         }
//      }
//     }


function check(arr) {
    let array = Array.isArray(arr)
    if(array){
        console.log("true");
    }
    else{
        console.log("false");
    }
}

    check('ee');
    check([1,2,"hii",56]);
    
    
