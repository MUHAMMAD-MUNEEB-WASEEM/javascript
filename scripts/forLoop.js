/*
    for (initialization; condition; expression like increament/decreament){
        statments
    }

    expression(increament/decreament) done after each time body runs, like if i = 0, then after first body runs,
    then i turns to 1.

    Infinite For loop:
    when you dont pass any thing in for loop parameter

    for ( ; ; ) {
        statements
    }
    
 */

for (var i = 0; i < 5; i++){
     console.log("print i = ", i);
}

 console.log("Reverse printing");

for (var i = 10; i > 0; i--){
    console.log("reverse print i = ", i);
}

console.log("Table printing");

num = Number(prompt("Enter number to generate its table: "));
for (var i = 1; i <= 10; i++){
    console.log(num + " x " + i + " = " + (num*i) )
}

console.log("Break in for loop");
for (var i = 0; i < 6; i++){
    if ( i === 4 ){
        break;
    }
    console.log("i = ", i);
}

console.log("Continue in for loop");
for (var i = 0; i < 6; i++){
    if ( i === 4 ){
        continue;
    }
    console.log("i = ", i);
}