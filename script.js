function quantFiles() {
    var input = prompt("Введіть обсяг флешки в ГБ:");
    var gb = parseFloat(input);

    if (!isNaN(gb) && gb > 0) {
        var totalMB = gb * 1024;
        var fileSizeMB = 820;
        var count = Math.floor(totalMB / fileSizeMB);
        alert("На флешку " + gb + " ГБ вміститься " + count + " файлів по 820 МБ");
    } 
    else {
        alert("Будь ласка, введіть коректне додатне число.");
    }
}