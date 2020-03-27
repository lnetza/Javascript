const cliente={
	nom:'Ale',
	tip: 'Premiun',
	sal: 3000
}

let {nom, tip, sal}=cliente;

console.log(nom);

console.log(tip);


//Objeto cliente
const cliente ={
    tipo: 'Premiun',
    saldo: 30000,
    datos: {
        nombre: 'Pedro',
        apellido: 'Perez',
        residencia: {
            ciudad: 'Mexico'
        }
    },
    movimientos: ['12-03-2018','12-03-2017','12-03-2016']
}

let {
    tipo,
    datos,
    datos: {residencia},
    movimientos,
    movimientos: [uno,dos]
}=cliente;

//Aqui imprime todas las fechas
console.log(movimientos);
//Aqui imprime solo las fechsa 1 y 2
console.log(uno,dos);