require("dotenv").config();

const express = require("express");
const { MongoClient } = require("mongodb");

const app = express();
const PORT = 3000;

// ===============================
// Middleware
// ===============================

app.use(express.json());
app.use(express.static("."));

// ===============================
// MongoDB
// ===============================

const client = new MongoClient(process.env.MONGODB_URI);

const db = client.db("lindles");

const stats = db.collection("stats");
const messages = db.collection("messages");

// ===============================
// Visitor Counter
// ===============================

app.get("/api/visitors", async (req, res) => {
    try {
        const result = await stats.findOneAndUpdate(
            { _id: "visitor_count" },
            { $inc: { count: 1 } },
            {
                upsert: true,
                returnDocument: "after"
            }
        );

        res.json({
            count: result.count
        });

    } catch (error) {
        console.error("Visitor counter error:", error);

        res.status(500).json({
            error: "Could not get visitor count"
        });
    }
});

// ===============================
// Visitor Board - Get Messages
// ===============================

app.get("/api/messages", async (req, res) => {
    try {
        const result = await messages
            .find()
            .sort({ date: -1 })
            .limit(20)
            .toArray();

        res.json(result);

    } catch (error) {
        console.error("Message loading error:", error);

        res.status(500).json({
            error: "Could not load messages"
        });
    }
});

// ===============================
// Visitor Board - Add Message
// ===============================

app.post("/api/messages", async (req, res) => {
    try {
        const { name, message } = req.body;

        // Validate the input
        if (
            typeof name !== "string" ||
            typeof message !== "string" ||
            !name.trim() ||
            !message.trim()
        ) {
            return res.status(400).json({
                error: "Name and message are required"
            });
        }

        // Limit the length
        if (name.trim().length > 20) {
            return res.status(400).json({
                error: "Name is too long"
            });
        }

        if (message.trim().length > 100) {
            return res.status(400).json({
                error: "Message is too long"
            });
        }

        // Save the message
        await messages.insertOne({
            name: name.trim(),
            message: message.trim(),
            date: new Date()
        });

        res.json({
            success: true
        });

    } catch (error) {
        console.error("Message submission error:", error);

        res.status(500).json({
            error: "Could not save message"
        });
    }
});

// ===============================
// Start Server
// ===============================

async function startServer() {
    try {
        await client.connect();

        console.log("Connected to MongoDB!");

        app.listen(PORT, () => {
            console.log(
                `Lindles server running at http://localhost:${PORT}`
            );
        });

    } catch (error) {
        console.error("MongoDB connection failed:");
        console.error(error);
    }
}

startServer();