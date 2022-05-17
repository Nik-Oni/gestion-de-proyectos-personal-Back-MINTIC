import conectarBD from "./db/db";
import { UserModel } from "./models/user";
import { Enum_Rol } from "./models/enums";

const main = async () => {
  await conectarBD();

  //CREAR UN USARIO
  await UserModel.create({
    apellido: 'gutierrez',
    nombre: 'Emanuel',
    correo: 'eggj',
    identificacion: '12345',
    rol: Enum_Rol.estudiante

  }).then((u) => {
    console.log('Usuario creado', u);
  }).catch((e) => {
    console.error('Error creando al usuario', e)
  });

/*   //OBTENER USUARIOS
  await UserModel.find().then((u)=>{
    console.log('usuarios', u);
  }).catch((e)=>{
    console.error('error obteniendo los usuarios', e)
  }) */
}

main()