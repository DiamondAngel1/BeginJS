function helloUser() {
    var name = prompt("Введіть своє ім’я:");
    if (name) {
        alert("Привіт, " + name + "!");
    } 
    else {
        alert("Ви не ввели ім’я.");
    }
}