const router = (req, res) => {
    if(req.url == "/"){
        res.writeHead(200, {"content-type": "text/html"})
        res.end("Hello");
    } else if (req.url =="/blog"){
        res.writeHead(200, {"Content-Type": "text/html"})
        res.end(JSON.stringify(['One', 'Two', 'Three']))
    }
    else{
        res.writeHead(404, {"content-type": "text/html"})
        res.end("Unknown URI");
    }
}

module.exports = router;