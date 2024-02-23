function adding(num1, num2, extra){  // pass the function using parameter extra and adding new function
    console.log(num1+num2);
    extra();
}

function ques(){
    console.log("Who are you?")
}

function reply(){
    console.log("I am fine.")
}


adding(5,9,ques); // when addition is complete then 2nd function run automatically
adding(11,9,reply);
adding(5,9,ques);
adding(5,100,reply);

adding(60,50, function(){   // another way to write callback function
    console.log("bye");
})



