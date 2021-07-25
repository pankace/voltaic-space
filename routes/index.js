
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Stupid' });
});

module.exports = router;

const port = "1111"
const WebSocket = require("ws")
const wss = new WebSocket.Server({ port })

let count = 0

function _onMessage(socket, message) {
  console.log(message)
  count += 1
  wss.clients.forEach((client) => {
    client.send(count)
  })
}

wss.on("connection", (socket, request) => {
  console.log("someone connect")

  socket.send(count)
  socket.on("message", (message) => _onMessage(socket, message))
})

wss.on("message", (socket, request) => {
  console.log({ socket, request })
})