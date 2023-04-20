let insertWord = prompt('inserisci una parola')

function reverseString(str) {

    let newString = "";

    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }

    return newString;
}


const result = reverseString(insertWord);
if (result === insertWord) {
    console.log('palindroma');
}
else{
    console.log('non palindroma');
}