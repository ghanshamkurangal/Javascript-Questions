function first(arr ,n) {
     n=0;
    let result =[];
    
    for (let i = 0; i <=arr.length; i++) {
        do {
            result.unshift(arr[0])
        } while (n !=0 ){
            result.unshift(arr[i])
        }
    }
}
console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
    console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));
