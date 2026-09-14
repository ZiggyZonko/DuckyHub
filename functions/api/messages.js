export async function onRequestGet({ env }) {
    try {
        const { results } = await env.lindles
            .prepare(
                `SELECT name, message, date
                 FROM messages
                 ORDER BY date DESC
                 LIMIT 20`
            )
            .all();

        return Response.json(results);
    } catch (error) {
        console.error("Message loading error:", error);

        return Response.json(
            { error: "Could not load messages" },
            { status: 500 }
        );
    }
}

export async function onRequestPost({ request, env }) {
    try {
        const { name, message } = await request.json();
        const trimmedName = typeof name === "string" ? name.trim() : "";
        const trimmedMessage = typeof message === "string" ? message.trim() : "";

        if (!trimmedName || !trimmedMessage) {
            return Response.json(
                { error: "Name and message are required" },
                { status: 400 }
            );
        }

        if (trimmedName.length > 20) {
            return Response.json({ error: "Name is too long" }, { status: 400 });
        }

        if (trimmedMessage.length > 100) {
            return Response.json(
                { error: "Message is too long" },
                { status: 400 }
            );
        }

        await env.lindles
            .prepare("INSERT INTO messages (name, message) VALUES (?, ?)")
            .bind(trimmedName, trimmedMessage)
            .run();

        return Response.json({ success: true });
    } catch (error) {
        console.error("Message submission error:", error);

        return Response.json(
            { error: "Could not save message" },
            { status: 500 }
        );
    }
}
