
let getUsuarioById = (id, callback2)=>{
  let usuario = {
    nombre:"Angel",
    id
  }
  if(id=== 15){
    callback2('El usuario con id '+id+' no existe en la Base de datos');

  }else{
    callback2(null,usuario);
  }
}


getUsuarioById(2,(err,usuario)=>{
  if(err){
    return console.log(err);
  }
  console.log("Usuario de base de datos",usuario);
})
