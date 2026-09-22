const persona = { nombre: 'Max', edad: 29 };
const hobbies = ['Sports', 'Cooking' , 'Tenis '];
//Extracción en parámetros
const printName = ({ nombre }) => {
    console.log(nombre);
    };

// hobby1 toma el índice 0, hobby2 toma el índice 1
const [ hobby1, ,hobby3] = hobbies;

//Extracción directa en declaración
const { nombre, edad } = persona;
printName(persona); //Max
console.log(nombre, edad); //Max 29
console.log(hobby1, hobby3); //Sports Tenis

