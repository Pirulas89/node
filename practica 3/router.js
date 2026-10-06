const requestHandler = (req,res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Assignment 1</title></head>');
        res.write('<body><form action="/create-user" method="POST"><ul><li>User 1</li><li>User 2</li><input type="text" name="username"><button type="submit">Send</button></form></body>');
         res.write('</html>');
        return res.end();
    }
   if (url === '/create-user' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => body.push(chunk));

        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const username = new URLSearchParams(parsedBody).get('username');
            console.log(username);
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
        });
    }
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Page not found');
};

exports.handler = requestHandler;
exports.someText = 'Some hard coded text';