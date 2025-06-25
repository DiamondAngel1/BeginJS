function age() {
    const thisYear = 2025;
    var birthYear = prompt("Введіть Ваш рік народження:");
    var year = parseInt(birthYear);

    if (!isNaN(year) && year > 1900 && year <= thisYear) {
        var age = thisYear - year;
        alert("Ваш вік: " + age + " років.");
    } 
    else {
        alert("Будь ласка, введіть коректний рік народження.");
    }
}