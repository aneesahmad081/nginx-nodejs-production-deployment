const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send(`
        <h1>🚀 Project- Production Deployment</h1>
        <h2>Node.js Application Running Behind Nginx Reverse Proxy</h2>
        <p>Hosted on Amazon Linux 2023 using Docker Compose</p>
    `);
});

app.get("/health", (req, res) => {
    res.json({
        status: "healthy",
        server: "Amazon Linux 2023",
        application: "Node.js + Express",
        proxy: "Nginx",
        container: "Docker"
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
