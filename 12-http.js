const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('Hello guys');
    }
    if(req.url === '/about'){
        res.end('Ahhaaaa you are ?!');
    }
    res.end(`
    <h1>Ooops !</h1>
    <p>We cant seem this pictures because you dont in home</p>
    <a href="/">Back home</a>
    <a href="/about">go to about</a>
    `)
})

server.listen(5000);