import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';


const app = express();
const server = http.createServer(app);
const PORT = 3000;

app.use(bodyParser.json());
app.use(cookieParser());

app.get('/', (req, res) => {
  console.log(req)
  res.send('hello')
})

server.listen(process.env.PORT || PORT);

server.on('error', function () {
  console.log('error')
});

server.on('listening', function () {
  console.log('listening')
});

export default app;