const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
    res.write('<html>');
    res.write('<head><title>angel paginas y ayudas</title></head>');
    res.write('<body>');
    res.write('<form action="/message" method="POST"><label for="message1">Cuadro de texto 1</label><br><textarea id="message1" name="message"></textarea><button type="submit" name="archivo" value="1">Botón 1</button></form>');
    res.write('<form action="/message" method="POST"><label for="message2">Cuadro de texto 2</label><br><textarea id="message2" name="message"></textarea><button type="submit" name="archivo" value="2">Botón 2</button></form>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
    }

    if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => body.push(chunk));

        return req.on('end', () => {
            const formData = new URLSearchParams(Buffer.concat(body).toString());
            const message = formData.get('message');
            const archivo = formData.get('archivo');

            if (message !== null && (archivo === '1' || archivo === '2')) {
                fs.appendFileSync(`${__dirname}/archivo${archivo}.txt`, `${message}\n`);
            }

            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
        });
    }
    
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
    res.write('</html>');
    res.end();
});

server.listen(3004);
