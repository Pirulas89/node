const http = require('http');
const fs = require('fs');
const path = require('path');

// Guarda users.txt en la misma carpeta que este archivo.
const usersFile = path.join(__dirname, 'users.txt');

// Evita que los nombres introducidos se interpreten como etiquetas HTML.
const escapeHtml = (value) => value.replace(/[&<>"']/g, (character) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
})[character]);

// Atiende las rutas de la versión que guarda usuarios en un archivo.
const requestHandler = (req, res) => {
    if (req.url === '/' && req.method === 'GET') {
        // Muestra el formulario y un enlace a la lista de usuarios.
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.end('<html><head><title>Crear usuario</title></head><body><form action="/create-user" method="POST"><input type="text" name="username" required><button type="submit">Enviar</button></form><a href="/users">Ver usuarios</a></body></html>');
        return;
    }

    if (req.url === '/create-user' && req.method === 'POST') {
        // Acumula todos los fragmentos recibidos en el cuerpo del formulario.
        const body = [];
        req.on('data', (chunk) => body.push(chunk));

        return req.on('end', () => {
            // Une los fragmentos y extrae el campo username del formulario.
            const parsedBody = Buffer.concat(body).toString();
            const username = new URLSearchParams(parsedBody).get('username');

            if (!username) {
                res.statusCode = 400;
                return res.end('El nombre es obligatorio');
            }

            // Añade el nombre al final del archivo sin bloquear el servidor.
            fs.appendFile(usersFile, `${username}\n`, 'utf8', (error) => {
                if (error) {
                    res.statusCode = 500;
                    return res.end('No se pudo guardar el usuario');
                }

                // Redirige a la página principal cuando termina la escritura.
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });
    }

    if (req.url === '/users' && req.method === 'GET') {
        // Lee el archivo de forma asíncrona y recibe el resultado en el callback.
        return fs.readFile(usersFile, 'utf8', (error, data) => {
            if (error && error.code !== 'ENOENT') {
                res.statusCode = 500;
                return res.end('No se pudieron leer los usuarios');
            }

            const users = error ? [] : data.split(/\r?\n/).filter(Boolean);
            // Usa un mensaje por defecto si el archivo aún no contiene usuarios.
            const list = users.length
                ? users.map((username) => `<li>${escapeHtml(username)}</li>`).join('')
                : '<li>No hay usuarios todavía</li>';

            res.setHeader('Content-Type', 'text/html; charset=utf-8');
            return res.end(`<html><head><title>Usuarios</title></head><body><ul>${list}</ul><a href="/">Añadir usuario</a></body></html>`);
        });
    }

    // Informa cuando se solicita una ruta que no existe.
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.end('Page not found');
};

// Permite iniciar el servidor al ejecutar reto.js directamente.
const server = http.createServer(requestHandler);

if (require.main === module) {
    server.listen(3004);
}

// Exporta el manejador para poder probarlo o reutilizarlo desde otro archivo.
exports.handler = requestHandler;