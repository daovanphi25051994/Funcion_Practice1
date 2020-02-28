function numberPlusOne(number) {
    return number + 1;
}

function showResult() {
let number = parseInt(prompt("Enter a number"));
let result = numberPlusOne(number);
alert(number + " + 1 = " + result);
}