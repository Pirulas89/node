const calcularEscudo = (nivel) => nivel * 15;
console.log(calcularEscudo(3));

const impactoCritico = (danoBase, multiplicador) => danoBase * multiplicador;
console.log(impactoCritico(100, 2.5));

const mensajeAlerta = () => "¡Alerta: Intrusos en la cubierta!";
console.log(mensajeAlerta());