
/*function calcularTemperaturamax(t1,t2,t3,t4,t5){
    return(Math.max(t1,t2,t3,t4,t5))
}


function calcularTemperaturamin(t1,t2,t3,t4,t5){
     return(Math.min(t1,t2,t3,t4,t5))
}

console.log("la temperatura maxima es:"+calcularTemperaturamax(1,2,3,4,5)+"°")

console.log("la temperatura minima es:"+calcularTemperaturamin(1,2,3,4,5)+"°")*/


let calcularTemperaturamax = (t1,t2,t3,t4,t5) => (Math.max(t1,t2,t3,t4,t5))

let calcularTemperaturamin = (t1,t2,t3,t4,t5) => (Math.min(t1,t2,t3,t4,t5))

let TemperaturaMaxima = calcularTemperaturamax(1,2,3,4,5);
let TemparaturaMinima = calcularTemperaturamin(1,2,3,4,5);

console.log(`La temperatura promedio es de: ${(TemperaturaMaxima + TemparaturaMinima) / 2}°C`)

