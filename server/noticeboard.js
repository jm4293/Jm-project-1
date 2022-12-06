const express = require('express');
const app = express();
const PORT = 3003;

// db 선언
const bodyparser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '123456789',
    database: 'express_db'
})
connection.connect();

app.use(cors());
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());

app.get('/', (req, res) => {
    res.send(`${PORT} 실행`);
});

app.post('/board', (req, res) => {
    connection.query('SELECT * FROM noticeboard', (err, rows, fields) => {
        if (err) {
            console.log("mysql read fail");
            console.log(err);
        }
        else {
            console.log("mysql read success");
            res.send(rows);
        }
    });
});

app.post('/board/register', (req, res) => {
    const title = req.body.title;
    const writer = req.body.writer;
    const content = req.body.content;
    const date = req.body.date;

    connection.query('INSERT INTO noticeboard (title, writer, content, date) VALUES(?, ?, ?, ?)', [title, writer, content, date], (err, rows, fields) => {
        if (err) {
            console.log("mysql update fail");
            console.log(err);
        } else {
            console.log("mysql update success")
            res.send(rows);
        }
    });
});

app.post('/board/view/comment', (req, res) => {

});

app.listen(PORT, () => {
    console.log(`server on port: ${PORT}`);
});



