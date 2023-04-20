let choice = prompt("scegli tra pari e dispari")
let num = parseInt(prompt("inserisci un numero tra 1 e 5"));
let cpuNum = randomNumber(1,5)
let finalNum = num + cpuNum


function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

let flag = "pari"
function isOdd() {
    if (finalNum % 2 === 1) {
        flag = "dispari"
    }
}



if (choice == "pari" && flag == "pari") {
    console.log("hai vinto e' pari")
}
else if(choice == "dispari" && flag == "dispari"){
    console.log("hai vinto e' dispari")
}
else if(choice == "dispari" && flag == "pari"){
    console.log("hai perso e' pari")
}
else if(choice == "pari" && flag == "dispari"){
    console.log("hai perso e' dispari")
}

console.log(finalNum)