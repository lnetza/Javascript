function Client(nombre, saldo){
    this.nombre=nombre;
    this.saldo=saldo;
}


//Prototipo que imprime saldo y nombre
Client.prototype.nombreClienteSaldo=function(){
        return `Nombre: ${this.nombre}, tu saldo es de ${this.saldo}`;
}

const cliente1 =new Client('Pedro',100);

console.log(cliente1.nombreClienteSaldo());

//Banca para empresas
function Empresa(nombre, saldo, telefono, tipo){
    Client.call(this, nombre, saldo);
    this.telefono=telefono;
    this.tipo=tipo;
}

//Heredar el prototypo de cliente
Empresa.prototype= Object.create(Client.prototype);

const empresa = new Empresa('Udemy', 1000000, 1283477, 'Educación');

console.log(empresa);