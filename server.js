const express = require('express');

const PORT = 3000;
const HOST = '0.0.0.0';

const app = express();
app.get('/server', (req, res) => {
	res.json({message: "Hello, from the Express server!"});
});

app.use(express.static('public'));

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);