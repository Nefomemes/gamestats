const express = require("express");
var app = express();
const path = require("path")
/* Credit:  https://stackoverflow.com/a/31144924 */
function requireHTTPS(req, res, next) { 
	/* The 'x-forwarded-proto' check is for Heroku */
if (!req.secure && req.get('x-forwarded-proto') !== 'https' && process.env.NODE_ENV !== "development") {
	return res.redirect('https://' + req.get('host') + req.url);
	} 
	
	next();
}

app.use(requireHTTPS);
app.use("/", express.static(path.join(__dirname, "site"), {
	lastModified: true,
	extensions: ["html"]
}))

app.all("*", (req, res) => {
	res.sendFile(path.join(__dirname, "site", "404.html"));
})

app.listen(process.env.PORT || 3000, () => console.log("Server is running!"))