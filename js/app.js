// Funcion peso a dolar
function pesosADolares(pesos, tasaCambioDolares){
    return pesos / tasaCambioDolares;
}

//Funcion dolar a peso
function dolaresAPesos(dolares, tasaCambioDolares){
    return dolares * tasaCambioDolares;
}

//Funcion de pesos a Euros
function pesosAEuros(pesos, tasaCambioEuros){
    return pesos / tasaCambioEuros;
}

//Funcion de euros a pesos
function eurosAPesos(euros, tasaCambioEuros){
    return euros * tasaCambioEuros;
}

//Funcion de pesos a reales
function pesosAReales(pesos, tasaCambioReal){
    return pesos / tasaCambioReal;
}

//Funcion de reales a pesos
function realesAPesos(reales, tasaCambioReal){
    return reales * tasaCambioReal;
}

const formatearDecimal = numero => {return numero.toLocaleString(es-AR,{minimunFractionDigits: 2, maximunFractionDigits:2}); }



//Funcion Convertir
function convertir(){
    let tasaCambioDolares = 1355.00;
    let tasaCambioEuros = 1637.00;
    let tasaCambioReal = 266.00;

    let opcion = prompt(`Que queres convertir??? \n 1)Pesos a Dolares💵 \n 2)Dolares a Pesos💵 \n 3)Pesos a Euros💶 \n 4)Euros a Pesos💶 \n 5)Pesos a Reales💷 \n 6)Reales a Pesos💷 \n Ingrese 1, 2, 3, 4, 5 o 6 para avanzar \n \n Elija una de estas opciones no me haga hacer un Else`);

    if(opcion === `1`){
        let pesos = parseFloat(prompt(`Ingrese la cantidad de pesos a convertir a usd:`))
        let dolares = pesosADolares(pesos,tasaCambioDolares);
        alert(`El equivalente en dolares de $${pesos} es USD${formatearDecimal(dolares)} `);
    }
    if(opcion === `2`){
        let dolares = parseFloat(prompt(`Ingrese la cantidad de usd a convertir a pesos:`))
        let pesos = dolaresAPesos(dolares,tasaCambioDolares);
        alert(`El equivalente en pesos Argentinos es de USD${formatearDecimal(dolares)} es $${formatearDecimal(pesos)} \n Argentina Campeona del Mundo \n Messi Te amo ❤️ `);
    }
    if(opcion === `3`){
        let pesos = parseFloat(prompt(`Ingrese la cantidad de pesos a convertir a Euros:`))
        let euros = pesosAEuros(pesos,tasaCambioEuros);
        alert(`El equivalente en Euros de $${pesos} es €${formatearDecimal(euros)} `);
    }
    if(opcion === `4`){
        let euros = parseFloat(prompt(`Ingrese la cantidad de Euros a convertir a pesos:`))
        let pesos = eurosAPesos(euros,tasaCambioEuros);
        alert(`El equivalente en pesos Argentinos es de €${formatearDecimal(euros)} es $${formatearDecimal(pesos)} \n Argentina Campeona del Mundo \n Messi Te amo ❤️ `);
    }
    if(opcion === `5`){
        let pesos = parseFloat(prompt(`Ingrese la cantidad de pesos a convertir a Reales:`))
        let reales = pesosAReales(pesos,tasaCambioReal);
        alert(`El equivalente en Euros de $${pesos} es R$${formatearDecimal(reales)} `);
    }
    if(opcion === `6`){
        let reales = parseFloat(prompt(`Ingrese la cantidad de Reales a convertir a pesos:`))
        let pesos = realesAPesos(reales,tasaCambioReal);
        alert(`El equivalente en pesos Argentinos es de R$${formatearDecimal(reales)} es $${formatearDecimal(pesos)} \n Argentina Campeona del Mundo \n Messi Te amo ❤️ `);
    }
}

convertir();