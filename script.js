localStorage.removeItem("name");

let button = document.querySelector(".btn")
let inputField = document.getElementById("username")

function startGame() {
    button.style.transform = "scale(0.9)"

    let username = inputField.value;
    if (username.trim() === "") {
        username = "Player";
    }

    localStorage.setItem("username", username)
    window.location.href = "main.html";
}

button.addEventListener("click", startGame)

inputField.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        startGame();
    }
})