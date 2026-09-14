export async function onRequestGet({ env }) {
    try {
        const result = await env.lindles
            .prepare(
                `INSERT INTO visitor_stats (id, count)
                 VALUES (1, 1)
                 ON CONFLICT (id) DO UPDATE SET count = count + 1
                 RETURNING count`
            )
            .first();

        return Response.json({ count: result.count });
    } catch (error) {
        console.error("Visitor counter error:", error);

        return Response.json(
            { error: "Could not get visitor count" },
            { status: 500 }
        );
    }
}
