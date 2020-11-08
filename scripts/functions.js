//function without return statement, cannot store in some variable

//function declaration, passing parameter
function greeting(msg){
    console.log(msg);
}

greeting("Have a good day")//invoking function, passing argument

//function with return statement, can store in some variable

function sum (a,b){
    return a+b;
}
var sum1 = sum(10,9);
console.log("sum=", sum1);

function multiply(a,b){
    return a*b;
}

var mult = multiply(sum(2,5), 5);
console.log("Multiplication where a argument is sum function and b is 5: ", mult);

function multiply(a,b){
    return sum(a,b) + 10
}

var mult1 = multiply(2, 5);
console.log("Multiplication where a argument is sum function and b is 5: ", mult1);

function grade(score){
    if (score >=90 && score < 100) {
        console.log("Grade A+");
    }
    else if (score >= 80 && score < 90) {
        console.log("Grade A");
    }
    else if (score >= 70 && score < 80) {
        console.log("Grade B")
    }
    else{
        console.log("Failed")
    }
}
grade(80);

//local vs global variable

/*
    Global variable is the one which can be used in function as well as in normal script. Local variable
    is only used inside the function. If variable inside the function is defined with var, then it is not
    the global variable, it is the local variable and cannot be used outside the function. Where as if
    we define some variable inside the body of function without var keyword, then it is the global variable
    and can be used outside the function but after that function invoking, before the function invoking, it
    cannot be used, after invoking, it can be used. In summing function, b is defined with var, so it is not
    the global variable, whereas in summing1, b is defined not with var, so it the global variable. Where
    a in both cases is the global variable as defined outside the function and in function, a is used without
    var keyword, so thats why it is the global variable
*/

console.log("Local vs Global Variable");

var a = 10;

function summing(){
    var b = 7;
    a = b + 2;
    return a+b;
}
console.log("local vs global variable", summing());
console.log("b is not a global variable here");


function summing1(){
    b = 10;
    a = b + 3;
    return a+b;
}
console.log("local vs global variable", summing1());
console.log("b is global variable here", b);