const router = (req, res) => {
    if(req.url == "/"){
        res.writeHead(200, {"content-type": "text/html"})
        res.end("Hello");
    } 
     else if (req.url =="/blog"){
         if (req.headers.password !== "potato" && req.method == 'POST'){
            res.writeHead(403, {"Content-Type": "text/html"})
            res.end('Forbidden')
         }
        else if(req.headers.password){
            res.writeHead(200, {"Content-Type": "application/json"})
            res.end(JSON.stringify(["a", "b"]))
        }
        else{
            console.log(`${req.headers.password} password!`)
            res.writeHead(200, {"Content-Type": "text/html"})
            res.end(JSON.stringify(['One', 'Two', 'Three']))
        }
    } else{
        res.writeHead(404, {"content-type": "text/html"})
        res.end("Unknown URI");
    }
}

module.exports = router;