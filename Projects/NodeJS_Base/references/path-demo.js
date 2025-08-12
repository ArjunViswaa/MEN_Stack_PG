const path = require('path');

console.log(__filename);
console.log("BaseName -> " + path.basename(__filename));
console.log("DirectoryName -> " + path.dirname(__filename));
console.log("ExtensionName -> " + path.extname(__filename));
console.log(path.parse(__filename));
console.log(path.join(__dirname, "test", "hello.html"));