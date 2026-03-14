const http = require('http')
const data = []
const server = http.createServer((req, res) => {
    console.log(req.url, req.method)
    if (req.url === '/get' && req.method === 'GET') {
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/plain')
        return res.end(JSON.stringify(data))
    }
    if (req.url === '/add' && req.method === 'POST') {
        let body = ''
        req.on('data', chank => body += chank)

        req.on('end', () => {
            body = JSON.parse(body)
            let data1 = { name: body.name, id: Date.now() }
            data.push(data1)
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            return res.end(JSON.stringify(data1));
        })
    }
    // res.statusCode = 200
    // res.setHeader('Content-Type', 'text/plain')
    // res.end('hello world')
})


server.listen(3000, () => {
    console.log('server is start')
})