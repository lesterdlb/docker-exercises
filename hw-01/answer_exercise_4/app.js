const express = require('express');
const app = express();
const port = 8080;

app.locals.loop = false;

app.get('/', (req, res) => {
	while (app.locals.loop) {}

	res.send('Service is working!');
});

app.get('/loop', (req, res) => {
	req.app.locals.loop = true;
	res.send('Infinite Loop!');
});

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
