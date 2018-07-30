const router = (req, res) => {
    if(req.url == "/"){
        res.writeHead(200, {"content-type": "text/html"})
        res.end("Hello");
    }
    else{
        res.writeHead(404, {"content-type": "text/html"})
        res.end("Unknown URI");
    }
}

module.exports = router;