const express = require('express');
const app = express();
const PORT = 3001;

const cors = require('cors');
const bodyparser = require('body-parser');
const mysql = require('mysql');

let http = require('http').createServer(app);
const io = require('socket.io')(http);

let connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '123456789',
    database: 'express_db'
})
connection.connect();

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send(`${PORT} 실행`);
})

// express_db에 email, password update 하기
app.post('/userInfoUpdate', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    const sendText = {
        email: email,
        password: password
    };
    res.send(sendText);  // #01 client에서 입력한 email, password을 server에서 받고 다시 client로 보내기

    connection.query('INSERT INTO user_info (user_email, user_password) VALUES(?, ?)', [email, password], (err, rows, fields) => {
        if (err) {
            console.log("mysql update fail");
            console.log(err);
        }
        else {
            console.log("mysql update success")
            console.log(row);
        }
    })
})

// express_db에서 email, password read 하고 client로 전달하기
app.post('/userInfoRead', (req, res) => {
    connection.query('SELECT * FROM user_info', (err, rows, fields) => {
        if (err) {
            console.log("mysql read fail");
            console.log(err);
        }
        else {
            console.log("mysql read success");
            res.send(rows);  // #02
        }
    })
})

// Chatting
io.on("connection", (socket) => {
    socket.on("send message", (item) => {
        const message = "id: " + item.name + "// message: " + item.msg;
        console.log(message);
        io.emit("receive message", {name: item.name, msg: item.msg});
    });
    socket.on("disconnect", () => {
        console.log("user disconnected: ", socket.id)
    });
});

http.listen(3002, () => {
    console.log("chatting app server on port: 3002");
})

app.listen(PORT, () => {
    console.log(`server on port: ${PORT}`);
})