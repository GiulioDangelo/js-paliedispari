let choice = prompt("scegli tra pari e dispari")
let num = parseInt(prompt("inserisci un numero tra 1 e 5"));
let cpuNum = randomNumber(1,5)
let finalNum = num + cpuNum

let i=0
while (choice !== "pari"){
    let choice2 = prompt("scegli tra pari e dispari")
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

let flag = "pari"
function isOdd(number) {
    if (finalNum % 2 === 1) {
        return flag = "dispari"
    }
    else{
        return flag = "pari"
    }
}


if (choice == "pari" && isOdd(finalNum) == "pari") {
    console.log("hai vinto e' pari")
}
else if(choice == "dispari" && isOdd(finalNum) == "dispari"){
    console.log("hai vinto e' dispari")
}
else if(choice == "dispari" && isOdd(finalNum) == "pari"){
    console.log("hai perso e' pari")
}
else if(choice == "pari" && isOdd(finalNum) == "dispari"){
    console.log("hai perso e' dispari")
}

console.log(finalNum)