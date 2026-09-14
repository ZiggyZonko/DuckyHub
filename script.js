import { openDuckPlanet } from "./utils/duck-planet.js";
import { unlockAchievement } from "./utils/achievements.js";
console.log("Enter the ducky mainframe....")

// ======= Constants ========= //

    const duckButton = document.getElementById("quack-button");
    const duckSpeech = document.getElementById("duck-speech");
    const numberOfProblems = 22;

// ======== Variables / Arrays ======= //

    const starColours = [
        "#ffffff", // white
        "#dbeafe", // icy blue
        "#93c5fd", // soft blue
        "#a5b4fc", // periwinkle
        "#c4b5fd", // lavender
        "#f0abfc", // pink-purple
        "#f9a8d4", // pink
        "#fde68a", // warm yellow
        "#fef3c7", // cream
        "#67e8f9"  // cyan
    ];

    const duckMessages = [
        "quack!",
        "hello :3",
        "you found me!",
        "QUACK QUACK",
        "what are you doing here!?",
        "welcome to lindles.xyz!",
        "honk",
        "i am a duck",
        "have you seen my bread?",
        "beep beep",
        "quack.exe is running",
        "nice to meet you!",
        "🦆",
        "smooth seas don't make good sailors ⛵️",
        "sitting duck",
        "get your ducks in order you ducky",
        "PhiDuck"
    ];

    let easterEggStar = null;

// ======== Star Generation ========= //

    let NumberOfStars = 1000;
    const starLayer = document.getElementById("star-layer");

    let stars = []

    for (let i = 0; i<NumberOfStars; i++) {

        const star = document.createElement("div");
        star.classList.add("star")

        // Individualise
            star.style.left = `${Math.random() * 100}vw`;
            star.style.top = `${Math.random() * 100}vh`;

            const size = Math.random()*5
            star.style.width = size + "px"
            star.style.height = size + "px"

            const starcolor = Math.floor(Math.random(0,3)*5)
            star.style.backgroundColor = starColours[starcolor]

        // Initialise
        starLayer.appendChild(star);

        stars.push(star)
    
    }

// ======== Easter Egg Star Logic ====== //

    const randomStarIndex = Math.floor(Math.random() * stars.length);

    easterEggStar = stars[randomStarIndex];

    easterEggStar.classList.add("easter-egg-star")

    easterEggStar.addEventListener('click', () => {

        unlockAchievement("duck_planet");

        openDuckPlanet();

    })

// ======== Time and Buttons ======== //

    function updateClock() {

        const now = new Date();
        const time = now.toLocaleTimeString();
        document.getElementById("clock").textContent = time + " • online";

    }

    updateClock();

    setInterval(updateClock, 1000);

// =========== Duck Talking ========= //

    duckButton.addEventListener("click", function () {

        const randomIndex = Math.floor(Math.random() * duckMessages.length);

        duckSpeech.textContent = duckMessages[randomIndex];

        unlockAchievement("first_quack");

    });


//========== Math Problem ========= //
const randomNumber =
    Math.floor(Math.random() * numberOfProblems) + 1;

document.getElementById("math-problem-image").src =
    `assets/mathproblems/${randomNumber}.png`;

// =========== Visitor Count ========= //
async function updateVisitorCount() {

    try {

        const response = await fetch("/api/visitors");

        const data = await response.json();

        const count = data.count;

        // Main counter
        document.getElementById("visitor-number").textContent =
            count.toString().padStart(6, "0");

        // Current visitor number
        document.getElementById("current-visitor").textContent =
            "#" + count.toString().padStart(6, "0");

    } catch (error) {

        console.error("Could not get visitor count:", error);

    }

}

updateVisitorCount();