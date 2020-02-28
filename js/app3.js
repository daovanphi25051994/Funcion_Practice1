function checkNumber(num1, num2) {
    if (num1 > num2) {
        return num1 + " > " + num2;
    } else {
        return num1 + num2;
    }
}

let result1 = checkNumber(3, 5);
alert(result1);
let result2 = checkNumber(5, 4);
alert(result2);