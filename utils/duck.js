import { unlockAchievement } from "./achievements.js";

const duck = document.querySelector(".footer-duck");

let duckClicks = 0;

duck.addEventListener("click", () => {

    duckClicks++;

    if (duckClicks >= 5) {
        unlockAchievement("duck_petter")
        window.location.href = "../pages/snake.html";
    }

});