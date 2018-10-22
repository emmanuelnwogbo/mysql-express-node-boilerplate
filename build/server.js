"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _http = _interopRequireDefault(require("http"));

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();

const server = _http.default.createServer(app);

const PORT = 3000;
app.use(_bodyParser.default.json());
app.use((0, _cookieParser.default)());
app.get('/', (req, res) => {
  res.send('hello');
});
server.listen(process.env.PORT || PORT);
server.on('error', function () {
  console.log('error');
});
server.on('listening', function () {
  console.log('listening');
});
var _default = app;
exports.default = _default;
