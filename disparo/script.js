let choice = prompt("scegli tra pari e dispari").toLowerCase();

//check if user inserted "pari" or "dispari"
while (choice != "pari" && choice != "dispari"){
   alert('inserisci un valore corretto')
	choice = prompt("scegli tra pari e dispari");
}


let num = parseInt(prompt("inserisci un numero tra 1 e 5"));

//check if user inserted a number between 1 and 5
while (isNaN(num) || num < 1 || num > 5) {
   alert('inserisci un valore corretto')
	num = parseInt(prompt('inserisci un numero tra 1 e 5'));
}


//get a random integer between a min and a max value
function randomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}


//generate a random number between 1 and 5 and add it to the one picked by the user
let cpuNum = randomNumber(1, 5);
let finalNum = num + cpuNum;



//check if the value inserted and the one generated are even or odd
let flag = "pari";
function isOdd(number) {
	if (number % 2 === 1) {
		return (flag = "dispari");
	} else {
		return (flag = "pari");
	}
}


//check if the user won
if (choice == "pari" && isOdd(finalNum) == "pari") {
	console.log("hai vinto e' pari");
} else if (choice == "dispari" && isOdd(finalNum) == "dispari") {
	console.log("hai vinto e' dispari");
} else if (choice == "dispari" && isOdd(finalNum) == "pari") {
	console.log("hai perso e' pari");
} else if (choice == "pari" && isOdd(finalNum) == "dispari") {
	console.log("hai perso e' dispari");
}


console.log(finalNum);