const express = require("express");

const app = express();

let visitorCount = 0;

app.use(express.static("."));

app.get("/api/visitors", (req, res) => {

    visitorCount++;

    res.json({
        count: visitorCount
    });

});

app.listen(3000, () => {
    console.log("Lindles server running on port 3000");
});