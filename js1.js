// Week2 - Function Practice 1

// Triple Five!
(function TripleFive() {
    for (var i = 0; i < 3; i++) {
        console.log("Five!");
    }
})();

// LastLetter
function lastLetter(word) {
    return word.charAt(word.length - 1);
};
var word = 'hello';
console.log("Last letter of " + word + ' is: ' + lastLetter(word));
word = 'island';
console.log("Last letter of " + word + ' is: ' + lastLetter(word));

// Square
function square(num) {
    return num * num;
}
var num1 = 3;
var num2 = 5;
console.log('square of ' + num1 + ' is: ' + square(num1));
console.log('square of ' + num2 + ' is: ' + square(num2));

// toArray 
function toArray(arg1, arg2, arg3) {
    return [arg1, arg2, arg3];
}
var myArray = toArray(1, 4, 5);
var myArray2 = toArray(8, 9, 10);
console.log("Array1 = " + myArray);
console.log("Array2 = " + myArray2);

// startsWithA
function startsWithA(arg1) {
    return arg1.charAt(0).toLowerCase() === 'a';
}
console.log('aardvark starts with A? ' + startsWithA('aardvark'));
console.log('bear starts with A? ' + startsWithA('bear'));