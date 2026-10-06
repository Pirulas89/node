// Esta lista solo existe mientras el proceso del servidor está activo.
const users = [];

// Atiende las peticiones HTTP y decide qué respuesta enviar según ruta y método.
const requestHandler = (req,res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        // Presenta el formulario para añadir un usuario.
        res.write('<html>');
        res.write('<head><title>Assignment 1</title></head>');
        res.write('<body><form action="/create-user" method="POST"><input type="text" name="username" required><button type="submit">Send</button></form></body>');
         res.write('</html>');
        return res.end();
    }
    if (url === '/users' && method === 'GET') {
        // Convierte los usuarios guardados en memoria en elementos de una lista.
        // Se escapan caracteres HTML para que los nombres se muestren como texto.
        res.write('<html>');
        res.write('<head><title>Users</title></head>');
        res.write(`<body><ul>${users.map((username) => `<li>${username.replace(/[&<>"']/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character])}</li>`).join('')}</ul></body>`);
        res.write('</html>');
        return res.end();
    }
   if (url === '/create-user' && method === 'POST') {
        // Acumula el cuerpo de la petición, que puede llegar en varios fragmentos.
        const body = [];
        req.on('data', (chunk) => body.push(chunk));

        return req.on('end', () => {
            // Une los fragmentos y obtiene el valor del campo username.
            const parsedBody = Buffer.concat(body).toString();
            const username = new URLSearchParams(parsedBody).get('username');
            if (username) users.push(username);

            // Redirige a la lista después de guardar el nombre en memoria.
            res.statusCode = 302;
            res.setHeader('Location', '/users');
            console.log(username);
            return res.end();
        });
    }

    // Responde con 404 si no coincide con ninguna ruta definida.
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Page not found');
};

// Exporta el manejador para que ejercicio.js pueda crear el servidor.
exports.handler = requestHandler;
// Texto de ejemplo que ejercicio.js muestra al arrancar.
exports.someText = 'Some hard coded text';
console.log