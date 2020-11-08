var score = Number(prompt("Enter your score: ", parseInt(0)));

/* comparison operators
    == equality
    === checks equality and make sure same data type is equatiing. This is preferable
    >= 
    <=
    >
    <
    != Not equals top
    !== Not equalt to and make sure that same datatype is equating. This is preferable
*/

console.log("Condition Statements")
if (score >= 90) {
    console.log("Grade A+");
}
else if (score >= 80) {
    console.log("Grade A");
}
else if (score >= 70) {
    console.log("Grade B")
}
else{
    console.log("Failed")
}

console.log("Condition Statements and Short circuit");

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