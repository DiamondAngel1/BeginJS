function quantChocolates() {
    var moneyInput = prompt("Скільки грошей у вас у гаманці?");
    var priceInput = prompt("Яка вартість однієї шоколадки?");

    var money = parseFloat(moneyInput);
    var price = parseFloat(priceInput);

    if (!isNaN(money) && !isNaN(price) && money >= 0 && price > 0) {
        var count = Math.floor(money / price);
        var change = money - count * price;
        alert("Ви можете купити " + count + " шоколадок.\nЗдача: " + change + " грн.");
    } 
    else {
        alert("Будь ласка, введіть коректні додатні значення.");
    }
}