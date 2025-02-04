document.addEventListener("DOMContentLoaded", () => {
    let name = localStorage.getItem("username");
    let score = localStorage.getItem("score");

    let message = "";
    if (score >= 90) {
        message = `Amazing, ${name}! You crushed it`;
    } else if (score >= 70) {
        message = `Great job, ${name}! Keep it up!`;
    } else if (score >= 50) {
        message = `Not bad ${name}. Try again`;
    } 
     else {
        message = `Try again and improve ${name}`;
    }

    document.querySelector(".greeting").innerText = message;


    document.querySelector(".score").innerHTML = `You Scored <strong>${score}%</strong>`
    let restartButton = document.querySelector(".btn")

    if (restartButton) {
        restartButton.addEventListener("click", () => {
            window.location.href = "index.html"
        })
    }
})