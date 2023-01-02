const express = require('express');
const app = express();

// //DB 설정
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '123456789',
    database: 'JM-project-1'
})
connection.connect();

// cors 설정
const cors = require('cors');
app.use(cors());

// bodyparser 설정
const bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

/////////////////////
//// Login - 3001////
/////////////////////
app.post('/userInfoUpdate', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    const sendText = {
        email: email,
        password: password
    };

    connection.query('INSERT INTO Login (id, password) VALUES(?, ?)', [email, password], (err, rows, fields) => {
        if (err) {
            console.log("로그인 서버 - 회원가입 성공");
            console.log(err);
        }
        else {
            console.log("로그인 서버 - 회원가입 완료")
            res.send(sendText);
        }
    })
})

app.post('/userInfoRead', (req, res) => {
    connection.query('SELECT * FROM Login', (err, rows, fields) => {
        if (err) {
            console.log("로그인 서버 - 이메일, 비민번호 찾기 실패");
            console.log(err);
        }
        else {
            console.log("로그인 서버 - 이메일, 비민번호 찾기 성공");
            res.send(rows);
        }
    })
})

app.listen(3001, () => {
    console.log(`로그인 서버: 3001`);
})

////////////////////////
//// chatting - 3002////
////////////////////////
var http = require("http").createServer(app);
const io = require("socket.io")(http, {
    cors: {
        // origin: "*"
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
});

io.on("connection", (socket) => {
    socket.on("send message", (item) => {
        const message = "닉네임: " + item.name + " 내용: " + item.msg;
        console.log(`채팅 서버 - 보낸 메세지: ${message}`);
        io.emit("receive message", { name: item.name, msg: item.msg });
    });

    socket.on("disconnect", () => {
        console.log("채팅 서버 - 유저 종료: ", socket.id)
    });

    socket.on('error', (error) => {
        console.log(`채팅 서버 - 에러 발생: ${error}`);
    })
});

http.listen(3002, () => {
    console.log(`채팅 서버: 3002`);
});

////////////////////////////
//// noticeboard - 3003 ////
////////////////////////////
app.post('/board', (req, res) => {
    connection.query('SELECT * FROM NoticeBoard', (err, rows, fields) => {
        if (err) {
            console.log("게시판 서버 - 게시판 불러오기 실패");
            console.log(err);
        }
        else {
            console.log("게시판 서버 - 게시판 불러오기 성공");
            res.send(rows);
        }
    });
});

app.post('/board/register', (req, res) => {
    const title = req.body.title;
    const writer = req.body.writer;
    const content = req.body.content;
    const date = req.body.date;

    connection.query('INSERT INTO NoticeBoard (title, writer, content, date) VALUES(?, ?, ?, ?)', [title, writer, content, date], (err, rows, fields) => {
        if (err) {
            console.log("게시판 서버 - 게시판 등록 실패");
            console.log(err);
        } else {
            console.log("게시판 서버 - 게시판 등록 성공")
            res.send(rows);
        }
    });
});

app.post('/board/view/comment', (req, res) => {

});

app.listen(3003, () => {
    console.log(`게시판 서버: 3003`);
});