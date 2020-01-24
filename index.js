const server = require("./server")

const port = process.env.port || 5000

server.listen(port, ()=> console.log(`*** SERVER RUNNING AT PORT ${port} ***`))