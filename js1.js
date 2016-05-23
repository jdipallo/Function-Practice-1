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

// excite
function excite(arg1) {
    return arg1 + '!!!';
}
var v1 = 'yes';
var v2 = 'go';
console.log(v1 + '?' + " Don't you mean " + excite(v1));
console.log(v2 + '?' + " Don't you mean " + excite(v2));

// sun
function sun(arg1) {
    if (arg1.indexOf('sun') == -1) {
        return false;
    } 
    else {
        return true;
    }
}

var v1 = 'sundries';
var v2 = 'asunder';
var v3 = 'catapult';
var v4 = 'blahsublahunblahsunblah';

console.log(v1 + ' has sun? ' + ' result: ' + sun(v1));
console.log(v2 + ' has sun? ' + ' result: ' + sun(v2));
console.log(v3 + ' has sun? ' + ' result: ' + sun(v3));
console.log(v4 + ' has sun? ' + ' result: ' + sun(v4));

// function tiny
function tiny(arg1) {
    if (arg1 >= 0 && arg1 <= 1) {
        return true;
    }
    else {
        return false;
    }
}

console.log('0.3 >=0 && <=1?' + ' result: ' + tiny(0.3));
console.log('14 >=0 && <=1?' + ' result: ' + tiny(14));
console.log('-5 >=0 && <=1?' + ' result: ' + tiny(-5));
console.log('0 >=0 && <=1?' + ' result: ' + tiny(0));
console.log('1>=0 && <=1?' + ' result: ' + tiny(1));

// getSeconds in the format MM:SS
function getSeconds(arg1) {
    // not going to validate arg1 for format but we should/could for future
    // we expect the MM:SS format 
    // lets split it to an array of values so we can parse out the MM and SS
    // need to convert to Integers so we can do Math
    var splitIt = arg1.split(':');
    var minutes = parseInt(splitIt[0]) * 60;
    var seconds = parseInt(splitIt[1]);
    
    return minutes + seconds;
}

var time1 = '1:30';
var time2 = '10:25';
console.log(time1 + ' converted to seconds => ' + getSeconds(time1));
console.log(time2 + ' converted to seconds => ' + getSeconds(time2));

