import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';

import mysql from 'mysql';

dotenv.config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB
});

connection.connect(function (err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id ' + connection.threadId);
  connection.end(function () {
    console.log('done')
  });
});

const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT;

app.use(bodyParser.json());
app.use(cookieParser());

app.get('/', (req, res) => {
  res.send('hello')
})

server.listen(PORT);

server.on('error', function () {
  console.log('error')
});

server.on('listening', function () {
  console.log(`listening on ${PORT}`)
});

export default app;