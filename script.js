function perimetr() {
    var side = prompt("Введіть довжину сторони квадрата:");
    var value = parseFloat(side);

    if (!isNaN(value) && value > 0) {
        var perimeter = value * value;
        alert("Периметр квадрата: " + perimeter);
    } 
    else {
        alert("Будь ласка, введіть додатне число.");
    }
}