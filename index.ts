import conectarBD from "./db/db";
import { UserModel } from "./models/user";
import { Enum_Rol, Enum_TipoObjetivo } from "./models/enums";
import { ProjectModel } from "./models/project";
import { ObjectId } from "mongoose";
import { ObjectiveModel } from "./models/objective";

const main = async () => {
  await conectarBD();
  
/*   const object = await ObjectiveModel.create({
    descripcion: 'Este es el objetivo Especifico',
    tipo: Enum_TipoObjetivo.especifico
  }) */

/*   await ProjectModel.create({
    nombre: "Proyecto 3",
    presupuesto: 120,
    fechaInicio: Date.now(),
    fechaFin: new Date('2022/11/10'),
    lider: '6283b74fc4748499fb90bfda',
    objetivos: ['62850bc9063d45def21e2607','62850c475006b1377eacd03d']

  }); */

  const proyecto: any = await ProjectModel.find({ nombre: 'Proyecto 3'}).populate('lider').populate('objetivos');
  console.log('El proyecto es:', JSON.stringify(proyecto));


/*   const lider = await UserModel.find({ _id: proyecto[0].lider});
  console.log('El lider del proyecto es: ', lider[0].nombre, '', lider[0].apellido) */
}

main()


//CRUD USUARIOS
/* 
//CREAR UN USARIO
await UserModel.create({
  apellido: 'gutierrez',
  nombre: 'prueba',
  correo: 'prueba@.com',
  identificacion: '123456',
  rol: Enum_Rol.estudiante

}).then((u) => {
  console.log('Usuario creado', u);
}).catch((e) => {
  console.error('Error creando al usuario', e)
});

//OBTENER USUARIOS
await UserModel.find().then((u) => {
  console.log('Usuarios', u);
}).catch((e) => {
  console.error('Error obteniendo los usuarios', e)
})

//OBTENER UN SOLO USUARIO
await UserModel.findOne({ identificacion: '12345' }).then((u) => {
  console.log('Usuarios', u);
}).catch((e) => {
  console.error('Error obteniendo los usuarios', e)
})

//EDITAR UN USUARIO
await UserModel.findOneAndUpdate(
  { correo: 'eggj' },
  {
    nombre: 'Emmanuel',
    apellido: 'Gutiérrez'
  }
).then((u) => {
  console.log('Usuario actualizado', u);
}).catch((e) => {
  console.error('Error actualizando el usuario', e)
})

//ELIMINAR UN USUARIO
await UserModel.findOneAndDelete({ identificacion: '123456' }
).then((u) => {
  console.log('Usuario eliminado', u);
}).catch((e) => {
  console.error('Error eliminando el usuario', e)
}) 
*/