//while loop takes ending condition, and run untils that condition does not become falss

i = 0;

while (i < 5 ){
    console.log("I =",i);
    i++;
}

var flag = true;

while (flag){
    console.log("Hello");
    var inp = prompt("Enter y to continue to run the loop or press any key to stop it!");

    if (inp.toLowerCase() !== "y"){
        console.log("breaking the loop");
        flag = false;
    }
}
if (!flag){
    console.log("While loop ends")
}
