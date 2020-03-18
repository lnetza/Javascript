let arreglo=['ruby','python','java','javascript'];

//Eliminar ruby

arreglo.forEach(function(elemento){
    console.log(elemento);
});

arreglo = arreglo.filter((elemento)=>elemento !='java');