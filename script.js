function calculateSpeed() {
    var distanceInput = prompt("Введіть відстань у кілометрах:");
    var timeInput = prompt("За скільки годин ви хочете дістатися:");
    var distance = parseFloat(distanceInput);
    var time = parseFloat(timeInput);
    if (!isNaN(distance) && !isNaN(time) && distance > 0 && time > 0) {
        var speed = distance / time;
        alert("Необхідна швидкість: " + speed + " км/год");
    } 
    else {
        alert("Будь ласка, введіть коректні додатні значення.");
    }
}