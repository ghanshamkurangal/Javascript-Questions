let str = "hello world";
let char = "o";

let ct = 0;
for(let i=0;i<=str.length;i++){
    if(str[i]===char){
         ct++
        
    }

    
    
}
if(ct===0){
    console.log("not found");
}else{
    console.log(ct);
}
