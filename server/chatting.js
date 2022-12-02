const express = require("express");
const app = express();
const PORT = 3002;

var http = require("http").createServer(app);
const io = require("socket.io")(http, {
    cors: {
        origin: "http://localhost:3000",
        // origin: "*",
        methods: ["GET", "POST"]
    }
});

// Chatting
io.on("connection", (socket) => {
    socket.on("send message", (item) => {
        const message = "id: " + item.name + " message: " + item.msg;
        console.log(message);
        io.emit("receive message", { name: item.name, msg: item.msg });
    });

    socket.on("disconnect", () => {
        console.log("user disconnected: ", socket.id)
    });

    socket.on('error', (error) => {
        console.log(`에러 발생: ${error}`);
    })
});

http.listen(PORT, () => {
    console.log(`app listening on port : ${PORT}`);
});