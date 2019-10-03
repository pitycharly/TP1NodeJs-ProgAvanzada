//SIMULAR BASE DE datos
//EMPLEADOS

let empleados = [
  {
    id:1,
    nombre:"Angel"
  },{
    id:2,
    nombre:"Tiago"
  },{
    id:3,
    nombre:"Belen"
  }
];

//SALARIOS
let salarios = [
  {
    id:1,
    salario:1000
  },{
    id:2,
    salario:2000
  },{
    id:3,
    salario:3000
  }
];

//OBTENER UN EMPLEADO A TRAVES DEL // IDEA:
let getEmpleado = (id,callback)=>{


  if (!empleadoBD){
    callback("No existe un empleado con el id "+id)
  }else{
    callback(null,empleadoBD);
  }
}

let getSalario = (id,callback)=>{
  let salarioBD = salarios.find(salario => salario.id === id)

  if (!salarioBD){
    callback("No existe un empleado con el id "+id)
  }else{
    callback(null,salarioBD);
  }
}

let getDatos = (id,callback)=>{
  let empleadoBD = empleados.find(empleado => empleado.id === id)
  let salarioBD = salarios.find(salario => salario.id === id)

  if (!salarioBD && !empleadoBD){
    callback("No existe un empleado con el id "+id)
  }else{
    callback(null,empleadoBD,salarioBD);
  }
}

getDatos(2,(err,empleado,salario)=>{
  if(err){
    return console.log(err);
  }
  console.log(empleado);
  console.log(salario);
});
