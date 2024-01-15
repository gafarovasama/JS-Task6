let theString = prompt("Sozu daxil edin:");

let word = [];
function reverseString(str){
    for (let i = 0; i < str.length; ++i) {
        word.push(str[i]);
    }
    console.log(word.reverse().join(""));
}

reverseString(theString);
