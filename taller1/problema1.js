
/*function calcularDistancia (coordenadax1,coordenaday1,coordenadax2,coordenaday2) {

    return("la distancia del planeta NABOO, es de: "+ Math.sqrt(Math.pow(coordenadax2 - coordenadax1,2) + Math.pow(coordenaday2 - coordenaday1,2) ) );


}

console.log(calcularDistancia(0,50,0,-70));*/


let calcularDistancia = (coordenadax1,coordenaday1,coordenadax2,coordenaday2) => `la distancia a la que se encuentra el planeta NABOO es de: ${Math.sqrt(Math.pow(coordenadax2 - coordenadax1,2) + Math.pow(coordenaday2 - coordenaday1,2))}km`;

console.log(calcularDistancia(0,50,0,-70));
