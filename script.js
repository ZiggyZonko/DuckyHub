console.log("Enter the ducky mainframe....")

// ======= Constants ========= //


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

// ======== Star Generation ========= //

    let NumberOfStars = 500;

    for (let i = 0; i<NumberOfStars; i++) {

        const star = document.createElement("div");
        star.classList.add("star")

        // Individualise
            const rtop = Math.random() * 100
            star.style.top = rtop + "%"
            const rleft = Math.random() * 100
            star.style.left = rleft + "%"

            const size = Math.random()*5
            star.style.width = size + "px"
            star.style.height = size + "px"

            const starcolor = Math.floor(Math.random(0,3)*5)
            star.style.backgroundColor = starColours[starcolor]

        // Initialise
        document.body.appendChild(star);
    
    }

// ======== Time and Buttons ======== //

function updateClock() {

    const now = new Date();
    const time = now.toLocaleTimeString();
    document.getElementById("clock").textContent = time + " • online";

}

updateClock();

setInterval(updateClock, 1000);