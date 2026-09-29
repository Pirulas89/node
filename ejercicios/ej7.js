
const serverResponse = {
    status: 200,
    ip: '192.168.1.45',
    port: 8080,
    token: 'A98F72-ZX',
    sessionDuration: 3600,
    userRole: 'Admin'
  };
  const validarAccesso = ({ ip, port, token }) => {
    return `Conectando a IP: ${ip} por el puerto ${port} con el token ${token}`;
  };
  const {userRole} = serverResponse; 
  console.log(validarAccesso(serverResponse)); // Conectando a IP:
    console.log(`Rol de usuario: ${userRole}`); // Rol de usuario: Admin
