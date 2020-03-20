class Cliente{
    constructor(nombre,apellido, saldo){
        this.nombre=nombre;
        this.apellido=apellido;
        this.saldo=saldo;
    }

    imprimirSaldo(){
        return `Hola ${this.nombre}, tu saldo es de: ${this.saldo}`;
    }

    tipoCliente(){
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
    retirarSaldo(retiro){
        return this.saldo -=retiro;
    }
    //Metodo estatico (No requieren ser instanciados)
    static bienvenida(){
        return `Bienvenido al cajero`;
    }
}


const maria = new Cliente('Maria','Perez',10000);
maria.retirarSaldo(5000);
console.log(maria.imprimirSaldo());
console.log(Cliente.bienvenida());