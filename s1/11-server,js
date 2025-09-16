const http = require('node:http')

const server = http.createServer((req, res) => {
    if (req.url === '/'){
        res.end('Hello from the server')
    } else if (req.url = '/getSecretData'){
        res.end('There is no secret data')
    }
})

const port = 7777
server.listen(port, () => {
    console.log(`Server is listening on port ${port}...`)
})