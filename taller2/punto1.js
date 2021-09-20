/*function regristrarPadawans(nombre,edad,planeta,estatura,clasificar){

    let padawans = {
        "Nombre": nombre,
        "Edad": edad,
        "Planeta": planeta,
        "Estatura": estatura,
    }

    console.log(padawans)
   clasificar(padawans)
   
}

regristrarPadawans("sebas",14,"tierra","1,50", function(padawans){

    if(padawans.Edad < 15){
        console.log("Manejo de la fuerza")
        

    }else if(padawans.Edad >= 15){
        console.log("Manejo del sable de luz")

    }


})*/

//funcion de flecha

let regristrarPadawans = (nombre,edad,planeta,estatura,clasificar) =>{

    let padawans = {
        "Nombre": nombre,
        "Edad": edad,
        "Planeta": planeta,
        "Estatura": estatura,
    }

    console.log(padawans)
   clasificar(padawans)
   
}

regristrarPadawans("sebas",14,"tierra","1,50", padawans =>{

    if(padawans.Edad < 15){
        console.log("Manejo de la fuerza")
        

    }else if(padawans.Edad >= 15){
        console.log("Manejo del sable de luzz")

    }


})

