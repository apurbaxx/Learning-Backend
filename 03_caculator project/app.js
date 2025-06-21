const http = require("http")
const {requesthandler} = require("./handlers.js")

const server = http.createServer(requesthandler)
const PORT = 8080
server.listen(PORT, ()=>{
    console.log(`Server Is listening on http://localhost:${PORT}`)
})
