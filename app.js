//Object literal

const cliente={
    nombre: 'Juan',
    saldo: 200,
    tipoCliente: function(){
        let tipo;

        if(this.saldo>1000){
            tipo='Gold';
        }else{
            tipo='Normal';
        }
        return tipo;
    }
}

console.log(cliente.tipoCliente());
////////Object con Prototype///////////

function Client(nombre, saldo){
    this.nombre=nombre;
    this.saldo=saldo;
}

//Crear Prototype

Client.prototype.tipoCliente=function(){
    let tipo;

    if(this.saldo>1000){
        tipo='Gold';
    }else if(this.saldo>500){
        tipo='Platinum';
    }else{
        tipo='Normal';
    }
    return tipo;
}
//Prototipo que imprime saldo y nombre
Client.prototype.nombreClienteSaldo=function(){
        return `Nombre: ${this.nombre}, tu saldo es de ${this.saldo}, Tipo Cliente ${this.tipoCliente()}`;
}

//Retirar saldo
Client.prototype.retirarSaldo = function(retiro){
    return this.saldo -= retiro;
}


const cliente1 =new Client('Pedro',100);
const cliente2 =new Client('Karen',600);
const cliente3 =new Client('Miguel',1200);

cliente2.retirarSaldo(300);

console.log(cliente1.nombreClienteSaldo());
console.log(cliente2.nombreClienteSaldo());
console.log(cliente3.nombreClienteSaldo());