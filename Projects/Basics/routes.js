const fs = require("fs");

const requestHandler = (req, res) => {
    // console.log("Hello there");
    if(req.url === "/") {
        res.write('<html>');
        res.write('<head><title>Hello server</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message" /><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    } else if(req.url === "/message" && req.method === "POST") {
        const body = [];
        req.on("data", (chunk) => {
            body.push(chunk);
        });
        return req.on("end", () => {
            let parsedBody = Buffer.concat(body).toString();
            // console.log(parsedBody);
            parsedBody = parsedBody.split("=")[1];
            fs.writeFile("message.txt", parsedBody, (err) => {
                if(err) console.log(err+ "Error while writing the message");
                res.statusCode = 302;
                res.setHeader("Location", "/");
                return res.end();
            });
        });
    }
    res.write('<html>');
    res.write('<head><title>Page not found</title></head>');
    res.write('<body>This page is not accessible by You!</body>');
    res.write('</html>');
    res.end();
}

module.exports = {
    handler: requestHandler,
    someText: "Hello from Routes"
}