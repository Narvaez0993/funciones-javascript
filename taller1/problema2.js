/*function obtenerombre (codigoNave){
    let cajones = codigoNave.split(":");

    return cajones[1];
}



console.log(obtenerombre("QSSRR:JUAN"))*/
let obtenerombre = (codigoNave) => cajones = codigoNave.split(":")[1]

console.log(`el piloto de esta nave es: ${obtenerombre("QSSRR:JUAN")}`)