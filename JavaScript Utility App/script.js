function getNumber() {
    return Number(document.getElementById("numberInput").value);
}
function checkPrime() {
    let num = getNumber();
    let result = document.getElementById("result");

    if (num <= 1) {
        result.innerHTML = "Not a Prime Number";
        return;
    }

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            result.innerHTML = "Not a Prime Number";
            return;
        }
    }

    result.innerHTML = "Prime Number";
}
function sumOfDigits() {
    let num = getNumber();
    let sum = 0;
    let temp = num;

    while (temp > 0) {
        sum = sum + (temp % 10);
        temp = Math.floor(temp / 10);
    }

    document.getElementById("result").innerHTML =
        "Sum of digits of " + num + " is " + sum;
}
function printTable() {
    let num = getNumber();
    let output = "";

    for (let i = 1; i <= 10; i++) {
        output += num + " x " + i + " = " + (num * i) + "<br>";
    }

    document.getElementById("result").innerHTML = output;
}
