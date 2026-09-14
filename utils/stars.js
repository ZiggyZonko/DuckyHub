const starColours = [
    "#ffffff",
    "#dbeafe",
    "#93c5fd",
    "#a5b4fc",
    "#c4b5fd",
    "#f0abfc",
    "#f9a8d4",
    "#fde68a",
    "#fef3c7",
    "#67e8f9"
];

const NumberOfStars = 500;

const starLayer = document.getElementById("star-layer");

if (starLayer) {

    for (let i = 0; i < NumberOfStars; i++) {

        const star = document.createElement("div");

        star.classList.add("star");

        star.style.left = `${Math.random() * 100}vw`;
        star.style.top = `${Math.random() * 100}vh`;

        const size = Math.random() * 4 + 1;

        star.style.width = `${size}px`;
        star.style.height = `${size}px`;

        const starColor =
            starColours[Math.floor(Math.random() * starColours.length)];

        star.style.backgroundColor = starColor;
        star.style.boxShadow = `0 0 ${size * 2}px ${starColor}`;

        starLayer.appendChild(star);
    }

}