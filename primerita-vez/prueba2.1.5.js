const name = 'John Doe';
let age = 29;
const hobbies = true;

age=30;

function summarizeUser(userName, userAge, userHobbies) {
    var messageHobbies = userHobbies ? 'tiene hobbies' : 'no tiene hobbies';
    return 'El nombre es ' + userName + ', la edad es ' + userAge + ' y ' + messageHobbies + '.';
}

console.log(summarizeUser(name, age, hobbies));
