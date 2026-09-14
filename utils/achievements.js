// =====================================
// Achievements
// =====================================

export const achievements = {

    first_quack: {
        name: "First Quack",
        description: "You made Albert Eggstein speak.",
        icon: "🦆"
    },

    duck_planet: {
        name: "To Duck Planet!",
        description: "You discovered the secret Duck Planet.",
        icon: "🌎"
    },

    duck_petter: {
        name: "Duck Petter",
        description: "You touched the duck 5 too many times...",
        icon: "✋️"
    }

};


// =====================================
// Get unlocked achievements
// =====================================

function getUnlockedAchievements() {

    return JSON.parse(
        localStorage.getItem("lindles-achievements") || "[]"
    );

}


// =====================================
// Unlock achievement
// =====================================

export function unlockAchievement(id) {

    const unlocked = getUnlockedAchievements();

    if (unlocked.includes(id)) {
        return;
    }

    unlocked.push(id);

    localStorage.setItem(
        "lindles-achievements",
        JSON.stringify(unlocked)
    );

    console.log("Achievement unlocked:", id);

    showAchievementPopup(id);

    updateAchievements();

}


// =====================================
// Achievement popup
// =====================================

function showAchievementPopup(id) {

    const achievement = achievements[id];

    if (!achievement) {
        return;
    }

    const popup = document.createElement("div");

    popup.classList.add("achievement-popup");

    popup.innerHTML = `
        <span class="achievement-popup-icon">
            ${achievement.icon}
        </span>

        <div>
            <small>ACHIEVEMENT UNLOCKED</small>
            <strong>${achievement.name}</strong>
        </div>
    `;

    document.body.appendChild(popup);

    setTimeout(() => {
        popup.classList.add("show");
    }, 10);

    setTimeout(() => {

        popup.classList.remove("show");

        setTimeout(() => {
            popup.remove();
        }, 300);

    }, 3500);

}


// =====================================
// Update achievement panel
// =====================================

function updateAchievements() {

    const container = document.getElementById("achievement-list");

    if (!container) {
        return;
    }

    const unlocked = getUnlockedAchievements();

    container.innerHTML = "";

    Object.entries(achievements).forEach(
        ([id, achievement]) => {

            const isUnlocked = unlocked.includes(id);

            const element = document.createElement("div");

            element.classList.add("achievement");

            if (!isUnlocked) {
                element.classList.add("locked");
            }

            element.innerHTML = `
                <span>
                    ${isUnlocked ? achievement.icon : "🔒"}
                </span>

                <div>
                    <strong>
                        ${isUnlocked ? achievement.name : "???"}
                    </strong>

                    <p>
                        ${isUnlocked
                            ? achievement.description
                            : "something is hidden..."}
                    </p>
                </div>
            `;

            container.appendChild(element);

        }
    );

    const progress =
        document.querySelector(".achievement-progress");

    if (progress) {

        progress.textContent =
            `${unlocked.length} / ${Object.keys(achievements).length} discovered`;

    }

}


updateAchievements();