
//switch case is only use for equality check, where each case is like doing === comparision

var inp = prompt("Enter a vowel: ").toUpperCase();

switch(inp){
    case "A":// its like inp === "A"
        console.log("A is a vowel");
        break;
    case "E":
        console.log("E is a vowel");
        break;
    case "I":
        console.log("I is a vowel");
        break;
    case "O":
        console.log("O is a vowel");
        break;
    case "U":
        console.log("U is a vowel");
        break;        
    default:
        console.log("Vowel not found!")
}