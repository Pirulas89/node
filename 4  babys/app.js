import http from "http";
import * as routes from "./router.js"; // Importa las funciones de app.js

const server = http.createServer(routes.handler);

server.listen(3000, () => {
  console.log("Servidor ejecutándose en http://localhost:3000");
});
