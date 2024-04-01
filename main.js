/*
Exercise 1:
  - Define an empty array named foods
*/

// Exercise 1 has been completed for you...

const foods = [];

console.log('Exercise 1 Result:\n', foods);
/*
Exercise 2:
  - Add the strings 'pizza' & 'cheeseburger' to the foods array such that 'pizza' comes before 'cheeseburger'.
*/
foods.push('pizza', 'cheeseburger')
console.log('Exercise 2 Result:\n', foods);

/*
Exercise 3:
  - Add the string 'taco' to the foods array so that 'taco' is the first food in the array.
*/
foods.unshift('taco')
console.log('Exercise 3 Result:\n', foods);

/*
Exercise 4:
  - Access the string 'pizza' (based upon its known position) in the foods array and assign to a variable named favFood.
*/

const favFood = foods.slice(1,2)
console.log('Exercise 4 Result:\n', favFood);
/*
Exercise 5:
  - Insert the string 'tofu' in the foods array between 'pizza' & 'cheeseburger'
*/

// Complete Exercise 5 below...
foods.splice(2,0, 'tofu')
console.log('Exercise 5 Result:\n', foods);
/*
Exercise 6:
  - Replace the string 'pizza' in the foods array with the strings 'sushi' & 'cupcake'.
*/

// Complete Exercise 6 below..
 foods.splice(1,1, "sushi", "cupcake")
console.log('Exercise 6 Result:\n', foods);

/*
Exercise 7:
  - Use the slice method on the foods array to create a new array containing 'sushi' & 'cupcake'.
  - Assign the new array to a variable named yummy.
*/

// Complete Exercise 7 below...

const yummy = foods.slice(1,3)
console.log('Exercise 7 Result:\n', yummy);

/*
Exercise 8:
  - Using the indexOf method on the foods array, assign the index of the 'tofu' string to a variable named soyIdx.
*/

// Complete Exercise 8 below...
const soyIdx =(foods.indexOf('tofu'))
console.log('Exercise 8 Result:\n', soyIdx);
/*
Exercise 9:
  - Assign to a variable named allFoods the result of joining the strings in the foods array such that the result is the following single string:
    'taco -> sushi -> cupcake -> tofu -> cheeseburger'
*/

// Complete Exercise 9 below...

const allFoods = foods.join (' --> ')
console.log('Exercise 9 Result:\n', allFoods);

/*
Exercise 10:
  - Assign a boolean to a variable named hasSoup depending upon whether or not the foods array includes the string 'soup'.
*/

// Complete Exercise 10 below...
let hasSoup = (foods === 'soup')

console.log('Exercise 10 Result:\n', hasSoup);

/*
Exercise 11:
  - Use the forEach method to iterate through the provided nums array and add each odd number to a new array named odds.
  - Hint: Initialize the odds variable to an empty array before the iteration.
*/
const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];
const odds = [];

nums.forEach(function(num) {
    if (num & 1) {
        odds.push(num);
    }
});

console.log('Exercise 11 Result:', odds);

/*
Exercise 12:
  - Use the forEach method to iterate through the same nums array and add the number to **one** of the following arrays: fizz, buzz or fizzbuzz - based upon the following:
  	- Add to the fizzbuzz array if the number is evenly divisible by 3 & 5.
  	- Add to the fizz array if the number is evenly divisible by 3.
  	- Add to the buzz array if the number is evenly divisible by 5.
*/

// Complete Exercise 12 below...

const frizz = []
const buzz = []
const frizzbuzz = []

nums.forEach(function(num){
    if(num % 3 === 0 && num % 5 === 0){
        frizzbuzz.push(num);
    } else if (num % 3 === 0) {
        frizz.push(num); 
    } else if (num % 5 === 0) {
        buzz.push(num);
    }
})

console.log('frizz', frizz)
console.log('buzz',buzz)
console.log('frizzbuzz', frizzbuzz)

// Exercise 13:
//   - Given the below numArrays array of arrays (two-dimensional array), assign the last nested array to a variable named numList.
//   - Assume you don't know how many nested arrays numArrays contains.
// */

const numArrays = [
	[100, 5, 23],
	[15, 21, 72, 9],
	[45, 66],
	[7, 81, 90]
];


// Complete Exercise 13 below.

const numList = numArrays[numArrays.length -1]
console.log('Exercise 13 Result:', numList)

/*
Exercise 14:
  - Given the above numArrays array, access the number 66 and assign to a variable named num.
*/

// Complete Exercise 14 below...

// we access the nested array inputting [2] and find the index of 1 in the third nested array for the result to be 66

const num = numArrays[2][1]
console.log('Exercise 14 Result:\n', num);

/*
Exercise 15:
  - Given the above numArrays array, use nested forEach methods to sum up all the numbers contained within numArrays and assign to a variable named total.
  - Hint: Be sure to declare and initialize the total variable before the iterations.
*/

// Complete Exercise 15 below...

let total = 0;

numArrays.forEach(function(nestedArray){
  nestedArray.forEach(function(number){
    total += number;
  })
})

console.log('Exercise 15 Result:', total)

// made a variable of 0 called total
// made a forEach function called nestedArray to iterate over each nestedArray
// made anothe forEach function called number to iterate over each number inside of the nestedArrays
// made it + = number 
// printed sum in console 


// notes 
  // % will give the remainder of a number
  // you can use it to find an odd or even number 
  