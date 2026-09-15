var name = 'John Doe';
var age = 29;
var hobbies = true;

function summarizeUser(userName, userAge, userHobbies) {
    var messageHobbies = userHobbies ? 'tiene hobbies' : 'no tiene hobbies';
    return 'El nombre es ' + userName + ', la edad es ' + userAge + ' y ' + messageHobbies + '.';
}

console.log(summarizeUser(name, age, hobbies));
