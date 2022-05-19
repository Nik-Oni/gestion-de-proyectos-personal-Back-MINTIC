import conectarBD from "./db/db";
import { UserModel } from "./models/user";
import { Enum_Rol, Enum_TipoObjetivo } from "./models/enums";
import { ProjectModel } from "./models/project";
import { ObjectId } from "mongoose";
import { ObjectiveModel } from "./models/objective";


const crearProyectoConObjetivos = async () => {
  const proyectoCreado = await ProjectModel.create({
    nombre: "Proyecto Mision TIC",
    fechaInicio: new Date('2022/06/01'),
    fechaFin: new Date('2022/12/24'),
    presupuesto: 120000,
    lider: '6283b74fc4748499fb90bfda',
  });

  const objetivoGeneral = await ObjectiveModel.create({
    descripcion: 'Este es el objetivo general',
    tipo: Enum_TipoObjetivo.general,
    proyecto: proyectoCreado._id
  });

  const objetivoEspecifico1 = await ObjectiveModel.create({
    descripcion: 'Este es el objetivo especifico 1',
    tipo: Enum_TipoObjetivo.especifico,
    proyecto: proyectoCreado._id
  });
  const objetivoGEspecifico2 = await ObjectiveModel.create({
    descripcion: 'Este es el objetivo especifico 2',
    tipo: Enum_TipoObjetivo.especifico,
    proyecto: proyectoCreado._id
  });
} 

const main = async () => {
  await conectarBD();
  const proyecto =await ProjectModel.findOne({_id: '62862c8a3d804b900a2b1ebb' })
  const objetivos = await ObjectiveModel.find({project: '62862c8a3d804b900a2b1ebb'})
  const proyectoConObjetivos = { proyecto, objetivos: objetivos}
  console.log('El proyecto con objetivos es: ', proyectoConObjetivos)
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