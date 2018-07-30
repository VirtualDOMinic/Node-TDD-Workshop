const http = require("http");
const hostname = process.env.HOSTNAME || "localhost";
const port = process.env.PORT || 4000;
const router = require("./router");

// can start server with "node server.js" command
http.createServer().listen(port, hostname, () => {
    console.log(`server is running on ${hostname} at port ${port}`)
});


