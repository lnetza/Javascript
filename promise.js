//Promises ejemplo resolve
//Resolve cuando el promise se cumple
//.then va esperar que se ejecute resolve para que pueda mandar el nmensaje

const esperando = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve('Se ejecuto');
    }, 5000);
});

esperando.then(function(mensaje){
    console.log(mensaje);
})

//Resolve y then van juntos y reject debe llevar catch
//Ejemplo Promise reject
const aplicarDescuento = new Promise(function(resolve, reject){
    const descuento= false;

    if (descuento){
        resolve('Descuento aplicado');
    }else{
        reject('No se puede aplicar el descuento');
    }
});

aplicarDescuento.then(function(resultado){
    console.log(resultado);
}).catch(function(error){
    console.log(error);
});