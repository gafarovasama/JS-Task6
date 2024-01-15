let theWord = prompt("Sozu daxil edin:");
let theLetter = prompt("Axtardiginiz herfi daxil edin:");

let word = theWord;
let letter = theLetter;
function findLetter(wrd, lttr){
    for (let i = 0; i < word.length; i++) {
        if (word[i] === letter) {
            return true;
        }
    }
    return false;
}

if (findLetter(word, letter)) {
    console.log("Var");
} else {
    console.log("Yoxdu");
}

findLetter();