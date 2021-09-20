/*function robasPlanos(id,despegarNave){

    if(id > 0 && id<=10){

        console.log("accedimos al plano" + id)
        despegarNave(null);
    }else{
        console.log("accedimos a un plano falso")

        despegarNave("error");
    }


}

robasPlanos(10,function(error){

   if(error){
    console.log("Destruccion automatica en 5 minutos...")
   }else{
        console.log("arrancando la nave...")      
   }

})*/


//funcion de flecha

let robasPlanos=(id,despegarNave)=>{

    if(id > 0 && id<=10){

        console.log("accedimos al plano" + id)
        despegarNave(null);
    }else{
        console.log("accedimos a un plano falsoo")

        despegarNave("error");
    }


}

robasPlanos(15,error=>{

   if(error){
    console.log("Destruccion automatica en 5 minutos...")
   }else{
        console.log("arrancando la nave...")      
   }

})
