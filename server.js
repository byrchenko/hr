const path = require("path");
const express = require("express");
const app = express();

const PORT = 3333;

app.use(express.static(path.resolve(__dirname, "./build/")));

app.get("/", function(req, res) {
	res.sendFile(path.resolve(__dirname, "./build/index.html"));
});

app.listen(PORT, function() {
	console.log(`Front server listening on port ${PORT}!`);
});
