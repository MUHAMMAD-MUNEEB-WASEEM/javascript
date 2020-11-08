var food = ["pizza", "burger", "sandwich"];

//Accessing array elements

console.log(food[0]);

//adding elements to array
//This is not the best method

food[3] = "biryani";
food[4] = "zinger";

console.log("Adding element to array ", food);

//finding length of array
console.log("lenght of array food is:",food.length);

//updating elements of array

food[0] = "Rice";
food[1] = "Roti";

console.log("updating elements of array:", food);

//push method

var sports = [];

sports.push("cricket");
sports.push("football" , "hockey");

console.log("array through push=", sports);

//user input to push

var favFoods = [];

favFoods.push(prompt("Enter first food"));
favFoods.push(prompt("Enter first food"));

console.log("arrya through push by user input=", favFoods);

//array with loop 

console.log("Array with for loop!");

var nums = [1, 2, 3, 4];

for (var i = 0; i < nums.length; i++){
    nums[i] = nums[i] + 2;
    console.log("update= ", nums[i]);
}
console.log("Updated nums array=", nums);

//searching in array

console.log("Searchin in an array");
var arr = [1, 2, 3, 4, 5];

var inp = Number(prompt("Enter number to search:"));
var found = false

for (var i = 0; i < arr.length; i++){
    if (arr[i] == inp){
        console.log("Found!");
        found = true;
        break;
    }
}
if (!found){
    console.log("Not Found!");
}

//splice function 

/*
    It is used to add elements to certain indexes, remove and replace 

    arr.splice(index where to add, number of replacements from that index, value to that index)

*/

var food = ['biryani', 'burger', 'sandwich'];

food.splice(1, 0, 'haleem');

console.log("adding elements to array using splice", food);
//["biryani", "haleem", "burger", "sandwich"]

food.splice(2, 0, 'haleem', 'nihari');//adding two elements to index 1

console.log("adding elements to array using splice", food); 
//["biryani", "haleem", "haleem", "nihari", "burger", "sandwich"]

//replacing

food.splice(1, 2, "kabab");//adding kabab to first index, and replace two elements from index 1, 
//it replaces value from given index and after given index if more than one replacements happen

console.log("adding elements to array using splice", food); 
//["biryani", "kabab", "nihari", "burger", "sandwich"]

//slice

var sli = food.slice(0, 3);

console.log("slicing from index 0 to 3(exclusive)", sli);



