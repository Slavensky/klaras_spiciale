function displayFigure() {
    let svar = document.getElementById("svar");
    let fig = document.getElementById('centered-image');

    var currentDate = new Date();
    var dayOfMonth = currentDate.getDate();
    var month = currentDate.getMonth();
    var year = currentDate.getFullYear();

    if (!(dayOfMonth < 15 && month == 11 && year == 2023)) {
        svar.innerHTML = "Ja!";
        fig.src = "images/klara_glad.png";
        fig.alt = "Klara er glad";
        console.log(dayOfMonth, month, year);
    }
}