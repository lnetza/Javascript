class Cliente{
    constructor(nombre,saldo){
        this.nombre=nombre;
        this.saldo=saldo;
    }

    imprimirSaldo(){
        return `Hola ${this.nombre}, tu saldo es de: ${this.saldo}`;
    }

   
    //Metodo estatico (No requieren ser instanciados)
    static bienvenida(){
        return `Bienvenido al cajero`;
    }
}

class Empresa extends Cliente{
    constructor(nombre, saldo, telefono, tipo){

        //Va hacia el constructor Padre de donde se heredo
        super(nombre, saldo);

        //No existen en el constructor padre
        this.telefono=telefono;
        this.tipo=tipo;
    }

    static bienvenida(){
        return 'Bienvenido al cajero para empresas';
    }
}

console.log(Cliente.bienvenida());
console.log(Empresa.bienvenida());