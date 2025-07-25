const http = require('http');
const { handler, someText } = require("./routes");

const server = http.createServer(handler);
console.log(someText);

server.listen(3000);