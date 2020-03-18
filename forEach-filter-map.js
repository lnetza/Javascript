let arreglo=['ruby','python','java','javascript'];

//ForEach

arreglo.forEach(function(elemento){
    console.log(elemento);
});
//Filter
arreglo = arreglo.filter((elemento)=>elemento !='java');

//Map

const carrito = [
      {id:1, producto:'Libro'},
      {id:2, producto:'Camisa'},
      {id:3, producto:'Guitarra'},
      {id:4, producto:'Disco'},
];

const nombreProducto = carrito.map(function(carrito){
    return carrito.producto;
})

console.log(nombreProducto);

//Iteradores

const mensaje ='Aprendiendo Javascript';

for (let letra of mensaje){
    console.log(letra)
}

const ciudades = ['Londres', 'New York', 'Madrid','Paris'];


for(let entrada of ciudades){
    console.log(entrada);
}

//Entries
const ciudades = ['Londres', 'New York', 'Madrid','Paris'];

for(let entrada of ciudades.entries()){
    console.log(entrada);
}

//Keys
const ciudades = ['Londres', 'New York', 'Madrid','Paris'];

for(let entrada of ciudades.keys()){
    console.log(entrada);
}

