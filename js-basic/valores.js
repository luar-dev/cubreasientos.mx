function newFunction(name = 'Raul', age = 34, country = 'MX') {
    console.log(name, age, country);
}

newFunction();
newFunction('Jessica', 25, 'US');

var estudiantes = ["a", "b", "c", "d"];

function saludar(estudiante) {
    console.log(`letra ${estudiante}`)
}

for(var i=0; i < estudiantes.length; i++) {
    saludar(estudiantes[i]);
}