const http = require('http');
const fs = require('fs');
// const hostname = '10.144.83.245';
const hostname = 'add.your.ip.here';
const port = 3000;

fs.readFile('index.html', (err, html) => {
		if(err){
			throw err;
		}

	const server = http.createServer((req, res) => {
		res.statusCode = 200;
		// res.setHeader('content-type', 'text/plain');
		res.setHeader('content-type', 'text/html');
		res.write(html);
		res.end();
	});
	
	server.listen(port, hostname, () => {
		console.log('Server start on port ' + port);
	});		
});
