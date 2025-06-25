function converter() {
    const euro = 0.86;
    var input = prompt("Введіть суму в доларах (USD):");
    var dollars = parseFloat(input);
    if (!isNaN(dollars) && dollars >= 0) {
        var euros = dollars * euro;
        alert(dollars + " USD = " + euros + " EUR");
    } 
    else {
        alert("Будь ласка, введіть коректну суму.");
    }
}