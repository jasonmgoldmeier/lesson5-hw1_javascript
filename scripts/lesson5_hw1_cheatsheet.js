// // Schedule Part 1 - Introduction to JavaScript
// // 1. What is JavaScript? 2. Main uses of JavaScript 3. JavaScript in action 4. Writing and running JavaScript 5. Debugging - comments, alerts, and the console 6. Data types 7. Variables 8. Arrays 9. Testing 10.  Logic 11.  Functions 12.  Exercises
// // Homework
// // Assignment
// // 1. Create a “cheat sheet” JavaScript file that contains examples of all of the things 
// // we learned today, delineated with comments:
// // a. Variables b. Debugging (alerts, comments, the console) c. Different data types d. Arrays e. Testing f. Logic

// // g. Functions
// // 2. Write 3 different functions that take input and return something via the console or 
// // an alert


// //Assignment 5: JavaScript
// //Cheat Sheet

// //Variables are declared with the var keyword
// /* var x = 10;
// var x = 12;
// var y = 14;

// var res = x + y;
// console.log(res);

// Debugging
// console.log()
// alert()
// //comments

// Data Types:

// String - "Hello World"
// Number - 5, 5.5, 1000 (all numbers in JS are floats)
// Boolean - true, false
// Undefined (no vlaue, var with no value)

// ARRAYS:

// Arrays are used to hold a collection of data, of any data type
// ["Snoopy". "Charlie Brown", "Patty", "Violet"];

// hold multiple data types:
// [11, 15, 25, 48, 79, "elephant"];

// stored in variables
// var class_names = ["Julie", "Sophie", "Rob", "John"];

// Array can store other arrays
// (multi-dimensional)

// var snacks = ["kisses", "popcorn", "cookies", "crisps"];
// var drinks = ["seltzer", "tea", "coffee"];
// var food = ["snacks", "drinks"];
// console.log(food[0] [2]);


// Testing

// Conducting Any test returns a boolean true or false
// To test if two strings are equal:
// “stringone” === “string two”; >false
// Using three equals signs instead of two also checks the object type 
// If you don’t check type, these are both true:
// (10-5) == 5; ○ (10-5) == “5”;
// Check the type to make sire their are no bugs
// To test if two strings are NOT equal:
// “stringone” !== “string two”; > true
// To test if one number is greater than another: 5 > 10; > false
// <, >, <=, >= are also valid comparison 
// operators



// Logic

// Controls flow of program and allows computer to do thinking for you

// If...Then...Else...Then
// ● Now that we have learned testing, we can 
// implement gates into our program
// if(5>10){   
//    console.log(“You’ll never see this because 5 is not greater than 10”); 
// } else{
//    console.log(“You will see this because 5 is not greater than 10”); }

// ● Else if is another condition to evaluate in the 
// case where if is not true and you have  another condition to look at before else:
// if(5>10){   
//    console.log(“You’ll never see this because 5 is not  greater than 10”); 
// }else if(5===5){   
//    console.log(“Yes, 5 really is equal to 5.”) 
// }else{   
//    console.log(“You will see this because 5 is not  greater than 10”); 
// }


// Functions

// ● A function is a way to encapsulate code for 
// later use
// ● It can take arguments, which are used as 
// variables inside the function

// function addTwo(some_number){   
// return some_number + 2; 
// } 
// console.log(addTwo(4)); 
// >6

// ● Once a function is declared, it can be called 
// later on (invoked) by calling its name and  supplying it with any arguments

// function alertName(somePersonsName){   
// return alert(somePersonsName); 
// } 
// alertName(“Zach”);

// /* 

// Function Excercises

var answer = prompt("Pick a color red, white, or blue?");

	console.log(answer);

	function checkColor(userAnswer) {
		if (userAnswer == 'red') {
			alert("America!!")
		}else if (userAnswer == 'white'){
			alert("Land of the free")
		}else if (userAnswer == 'blue'){
			alert("Home of the brave")
		}
		else{
			alert("Give it another shot, buddy!")
		}
	}

	checkColor(answer)
///////////////////////////////////////////////////////

	var answer = prompt("Name a weather condition");

	console.log(answer);

	function checkWeather(userAnswer) {
		if (userAnswer == 'rain') {
			alert("Pull out your umbrella, we have some showers!!")
		}else if (userAnswer == 'snow'){
			alert("Simply no place to go? Let it snow Let it snow Let it snow")
		}else if (userAnswer == 'tornado'){
			alert("Take cover immediately!!!")
		}
		else{
			alert("I'm sorry, our meteorologist says doesn't see that on the radar ")
		}
	}

	checkWeather(answer)
///////////////////////////////////////////////////////



function addNumber(){

		return 10000 + 90000;
}

console.log(addNumber())

function addNumber(){

		return 100000 + 100000;
}

console.log(addNumber())





























