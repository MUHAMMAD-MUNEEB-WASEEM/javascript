var a = 5;
var b = 10;

console.log(a);
console.log(b);

//normal increament or decreament
a = a + 1;
b = b + 5;

console.log(a);
console.log(b);

//another short way of doing same above thing
a += 1;
b += 5;

console.log(a);
console.log(b);

//pre and post increament/decreament

/*  pre increament/decreament means first store increased or decreased value in other variable and then 
    increament/decreament a or the variable used with ++ or --, whereas post increament/decreament means
    assign current value to some variable and then increament/decreament a or b or variable with post ++ or --
*/

++a;
b++;

console.log(a);
console.log(b);