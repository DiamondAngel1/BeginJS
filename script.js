function evenOrOdd() {
    var input = prompt("Введіть ціле число:");
    var number = parseInt(input);

    var isValid = !isNaN(number);
    var isEven = number % 2 === 0;

    var result = isValid && (isEven && "Число парне" || "Число непарне") || "Це не ціле число";
    alert(result);
}