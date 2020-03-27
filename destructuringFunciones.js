function reservacion(completo,
            {
                metodoPago='efectivo',
                cantidad=0,
                dias=0
            }={}
    )
    {
        if(completo){
            console.log('Proceder a reservar');
        }else{
            console.log('Abandonar');
        }
}

reservacion(true,{metodoPago:'tarjeta',cantidad:5000, dias:5});