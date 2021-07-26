function _endpoint() {
  // hack to detect if deployment or development environment
  const protocol = location.protocol.startsWith("https") ? "wss" : "ws"
  const url = protocol + "://" + location.host + "/ws"
  return url
}

const ws = new WebSocket(_endpoint())

ws.onmessage = function (msg) {
  const { i, max } = JSON.parse(msg.data)

  console.log(msg.data)
  console.log(msg)

  const astrokun = document.getElementsByClassName("astro")[0]

  const progressbar = document.getElementsByClassName("progress")[0]

  astrokun.style.transform = `translateX(${(i * 100) / max}vw)`

  progressbar.innerHTML = `${~~((i * 100) / max)}%`

  return false
}
