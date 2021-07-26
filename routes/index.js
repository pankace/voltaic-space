const express = require("express")
const app = express()
const expressWs = require("express-ws")(app)
const clients = new Set()

const router = express.Router()
const fs = require("fs")

const max = 1000

let i = 0
let lastWrite = 0

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
  fs.writeFileSync("count.txt", String(i))

  if (i > max) {
    return res.render("success")
  }

  if (Date.now() - lastWrite > 500) {
    let count = fs.readFileSync("count.txt")
    res.render("index", { count, max })
    lastWrite = Date.now()
  }

  console.log(`current clients: ${clients.size}`, `count: ${i}/${max}`)

  broadcast()
})

function broadcast() {
  clients.forEach((socket) => {
    const data = JSON.stringify({ i, max })
    try {
      setTimeout(() => socket.send(data))
    } catch {
      console.error("little error don't mind me")
    }
  })
}

module.exports = router
