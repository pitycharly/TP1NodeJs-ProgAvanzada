/*Genere	el	manejo	del	async	para	que	me	devuelva
un	salario	ingresado	por	id,
también	deberá	manejar	el	error,
en	caso	de	que	no	se	encuentre	el	id
dentro	de	la	base	de	datos	local.	*/
let empleados = [{
  id : 1,
  nombre : "Tiago"
},{
  id : 2,
  nombre : 'Belen'
}, {
  id : 3,
  nombre : "Angel"
}];

let salarios = [{
  id : 1,
  salario : 1000
}, {
  id : 2,
  salario : 2000
}];


async function getSalario(id){
    let salarioDB = await salarios.find(salario => salario.id === id)
    if (!salarioDB){
      console.log('No existe esa relación : ' + id)
    }else {
      console.log(salarioDB);
    }
  }
  getSalario(4);
