let salario = 3500000,
  comisiones = 1500000,
  licencias,
  resultadoDeducciones,
  salarioTotal,
  deducciones;


 /*process.stdout.write("Número de licencias vendidas: ");
 process.stdin.on("data", function (dato) {
  licencias = parseInt(dato)
  resultadoDeducciones = licencias * comisiones;
  deducciones = resultadoDeducciones * 0.05;
  resultadoDeducciones = resultadoDeducciones - deducciones;
  salarioTotal = resultadoDeducciones + salario;
  process.stdout.write(`El salario total del vendedor es de: ${salarioTotal}`);
  process.exit();

});*/

//funcion de flecha

process.stdout.write("Número de licencias vendidas: ");
process.stdin.on("data", let = (dato) => {
  licencias = parseInt(dato)
  resultadoDeducciones = licencias * comisiones;
 deducciones = resultadoDeducciones * 0.05;
 resultadoDeducciones = resultadoDeducciones - deducciones;
 salarioTotal = resultadoDeducciones + salario;
 process.stdout.write(`El salario total del vendedor es de: ${salarioTotal}`);
 process.exit();
});