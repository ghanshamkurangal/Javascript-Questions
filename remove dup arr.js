let arr = [2,6,2,8,4,5,9,6,2,5];


let duparr = [];

for(let i=0;i<=arr.length;i++){
    if(duparr.indexOf(arr[i])===-1){
        duparr.push(arr[i])
    }
    
}
console.log(duparr);