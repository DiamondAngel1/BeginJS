function area() {
    var input = prompt("Введіть радіус кола:");
    var radius = parseFloat(input);

    if (!isNaN(radius) && radius > 0) {
        var area = Math.PI * radius * radius;
        alert("Площа кола: " + area);
    } 
    else {
        alert("Будь ласка, введіть коректне додатне число.");
    }
}