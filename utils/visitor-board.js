// =====================================
// Visitor Message Board
// =====================================

const visitorSubmit = document.getElementById("visitor-submit");
const visitorName = document.getElementById("visitor-name");
const visitorMessage = document.getElementById("visitor-message");
const visitorMessages = document.getElementById("visitor-messages");

visitorSubmit.addEventListener("click", async () => {

    const name = visitorName.value.trim();
    const message = visitorMessage.value.trim();

    if (!name || !message) {
        return;
    }

    visitorSubmit.disabled = true;
    visitorSubmit.textContent = "posting...";

    try {

        const response = await fetch("/api/messages", {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                name: name,
                message: message
            })
        });

        if (!response.ok) {
            throw new Error("Failed to post message");
        }

        visitorName.value = "";
        visitorMessage.value = "";

        await loadMessages();

    } catch (error) {

        console.error("Message board error:", error);

    } finally {

        visitorSubmit.disabled = false;
        visitorSubmit.textContent = "sign board →";

    }

});


async function loadMessages() {

    try {

        const response = await fetch("/api/messages");

        if (!response.ok) {
            throw new Error("Failed to load messages");
        }

        const messages = await response.json();

        visitorMessages.innerHTML = "";

        if (messages.length === 0) {

            visitorMessages.innerHTML = `
                <p class="visitor-loading">
                    nobody has left a message yet... be the first!
                </p>
            `;

            return;
        }

        messages.forEach(entry => {

            const messageElement = document.createElement("div");
            messageElement.classList.add("visitor-message");

            const nameElement = document.createElement("strong");
            nameElement.textContent = entry.name;

            const textElement = document.createElement("span");
            textElement.textContent = entry.message;

            messageElement.appendChild(nameElement);
            messageElement.appendChild(textElement);

            visitorMessages.appendChild(messageElement);

        });

    } catch (error) {

        console.error("Could not load messages:", error);

        visitorMessages.innerHTML = `
            <p class="visitor-loading">
                couldn't load the message board :(
            </p>
        `;

    }

}


loadMessages();