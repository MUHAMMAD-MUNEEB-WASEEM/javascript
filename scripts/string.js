var str = "To be or not to be";

//length
console.log("length of string:", str.length);

//toLowerCase and toUpperCase

var giv = "Pizza";
var inp = "piZZa";

//let say we want to compare two strings, but both have different case type, so to maintain same case type,
//we use toLowerCase or toUppperCase, which convert complete string either in small or capital

if (giv.toLowerCase() === inp.toLowerCase()){
    console.log("Match");
} else{
    console.log("Not Matched");
}

//slice
var str1 = str.slice(2, 5);
console.log("sliced string from 2 to 5(exclusive):", str1);

var str2 = str.slice(3);
console.log("sliced string from 2 till end:", str2);

//indexOf and lastIndexof

console.log("indexOf and lastIndexOf")

//indexOf search provided string from start and returns index of first occurence of string
//We can also provide some number to it, so it starts searching after that provided index in forward direction
//lastIndexOf search provided string from end and returns index of first occurence of string
//We can also provide some number to it, so it starts searching after that provided index in
// backward direction from end to start

console.log("Search be:", str.indexOf("be"));
console.log("Search be:", str.indexOf("be", 10));
console.log("Search be:", str.lastIndexOf("be"));
console.log("Search be:", str.lastIndexOf("be", 10));

//charAt and replace function

//charAt gives the character at provided index
console.log("charAt:", str.charAt(7));

//replace

console.log("replace")

//replace old string with the new string

var str3 = str.replace("be", "hello");
console.log("be with hello:", str3);

//replace all occurence of old strings with the new one
// /oldstring/g used for this, g stands for global

var str4 = str.replace(/be/g, "hello");
console.log("all be with hello:", str4);

//replace all occurence of old strings with the new one irrespective of case sensitivity
// /oldstring/gi used for this, g stands for global

var str5 = str.replace(/to/gi, "hi");
console.log("all to with hi:", str5);

//split function
//converts string to array. It splits string where provided parameter is present, like it can be space
//it can be some character, word, especial characters etc.

console.log("Split");

var arr1 = str.split(" ");
console.log("Split string to array from space: ", arr1);