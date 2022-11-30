const express = require("express");
const app = express();
const PORT = 3002;

let http = require("http").createServer(app);
const io = require("socket.io")(http, {
    cors: {
        origin: "http://localhost:3000",
        // origin: "*",
        methods: ["GET", "POST"]
    }
});

app.get('/', (req, res) => {
    res.send(`${PORT} 실행`);
})

// Chatting
io.on("connection", (socket) => {
    socket.on("send message", (item) => {
        const message = "이름: " + item.name + " 내용: " + item.msg;
        console.log(`${socket.id}: ${message}`);
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
    console.log(`server on port : ${PORT}`);
});