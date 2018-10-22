"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _http = _interopRequireDefault(require("http"));

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _mysql = _interopRequireDefault(require("mysql"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv.default.config();

const connection = _mysql.default.createConnection({
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
    console.log('done');
  });
});
const app = (0, _express.default)();

const server = _http.default.createServer(app);

const PORT = process.env.PORT;
app.use(_bodyParser.default.json());
app.use((0, _cookieParser.default)());
app.get('/', (req, res) => {
  res.send('hello');
});
server.listen(PORT);
server.on('error', function () {
  console.log('error');
});
server.on('listening', function () {
  console.log(`listening on ${PORT}`);
});
var _default = app;
exports.default = _default;
