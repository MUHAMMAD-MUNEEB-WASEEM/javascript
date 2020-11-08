
var name = prompt("What is your age?");
console.log(name);


//In this, we have passed default value also so if user not entered anything, we simply get muneeb
var name1 = prompt("What is your age?", "muneeb");
console.log(name1);

/*One thing to remember that prompt always return value in strings, so if your are asking for some number, it
 it gives you that in string. So to convert it into number, we need to apply conversions there*/
