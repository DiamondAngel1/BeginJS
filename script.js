function reverse() {
    var input = prompt("Введіть тризначне число:");
    var number = parseInt(input);

    if (!isNaN(number) && number >= 100 && number <= 999) {
        var last = number % 10;
        var middle = Math.floor((number % 100) / 10);
        var first = Math.floor(number / 100);
        var reversed = last * 100 + middle * 10 + first;

        alert("Число паліндром: " + reversed);
    } 
    else {
        alert("Будь ласка, введіть коректне тризначне число.");
    }
}