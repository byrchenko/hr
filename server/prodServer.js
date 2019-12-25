const path = require("path");
const express = require("express");
const app = express();
const PORT = 3334;

app.use(express.static("../build"));

app.get("/", (req, res) => {
	res.sendFile("../build/index.html");
});

app.listen(PORT, function() {
	console.log(`Front server listening on port ${PORT}!`);
});
