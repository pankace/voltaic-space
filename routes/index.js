const express = require("express")
const app = express()
const expressWs = require("express-ws")(app)
const clients = new Set()

const router = express.Router()
const fs = require("fs")

const max = 1000000

let i = +process.env.START || 0
let lastWrite = Date.now()
fs.writeFileSync("count.txt", "0")

router.ws("/ws", function (ws, req) {
  //Add client to Set. NB: The list being a Set will help to avoid adding duplicate clients
  clients.add(ws)

  console.log("someshit conenct")

  ws.on("close", () => {
    //Remove client from Set once their connection is closed
    clients.delete(ws)
  })

  const data = JSON.stringify({ i, max })
  ws.send(data)
})

/* GET home page. */

router.get("*", function (req, res, next) {
  i++

  if (i > max) {
    return res.render("success")
  }

  if (Date.now() - lastWrite > 3000) {
    lastWrite = Date.now()
    fs.writeFileSync("counter.txt", String(i))
  }

  res.render("index", { i, max })

  console.log(`current clients: ${clients.size}`, `count: ${i}/${max}`)

  broadcast()
})

function broadcast() {
  console.log("enter broadcast")
  clients.forEach((socket) => {
    const data = JSON.stringify({ i, max })
    try {
      setTimeout(() => socket.send(data))
    } catch {
      console.error("little error don't mind me")
    }
  })
  console.log("left broadcast")
}

module.exports = router
