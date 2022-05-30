import { ProjectModel } from "../models/project";
import { UserModel } from "../models/user"

const resolvers = {
    Query:{
        Usuarios: async (parent, args) => {
            const usuarios = await UserModel.find()
            return usuarios;
        },
        Usuario: async (parent, args) =>{
            const usuario = await UserModel.findOne({_id: args._id});
            return usuario;
        },
        Proyectos: async (parent, args) =>{
            const proyectos= await ProjectModel.find().populate('lider');
            return proyectos
        },
    },
    Mutation: {
        crearUsuario: async (parent, args) =>{
            const usuarioCreado = await UserModel.create({
                nombre: args.nombre,
                apellido: args.apellido,
                identificacion: args.identificacion,
                correo: args.correo,
                estado: args.estado,
                rol: args.rol,
            })

            if (Object.keys(args).includes('estado')){
                usuarioCreado.estado= args.estado;
            }

            return usuarioCreado;
        },
        editarUsuario:async (parent, args) => {
            const usuarioEditado = await UserModel.findByIdAndUpdate(args._id,{
                nombre:args.nombre,
                apellido: args.apellido,
                identificacion: args.identificaicon,
                correo: args.correo,
                rol: args.rol,
                estado: args.estado,
            }).then((u)=> {
                return usuarioEditado
            }).catch((e)=> {
                console.error('error al editar usuario', e)
            });
            return usuarioEditado;
        },
        eliminarUsuario: async (parent, args) => {
            if (Object.keys(args).includes('_id')){
                const usuraioEliminado = await UserModel.findOneAndDelete({_id: args._id})
                return usuraioEliminado
            } else if (Object.keys(args).includes('correo')){
                const usuraioEliminado = await UserModel.findOneAndDelete({correo: args.correo})
                return usuraioEliminado
            }
        },
        crearProyecto: async (parent, args) =>{
            const proyectoCreado = await ProjectModel.create({
                nombre: args.nombre,
                estado: args.estado,
                fase: args.fase,
                fechaInicio:args.fechaInicio,
                fechaFin: args.fechaFin,
                presupuesto: args.presupuesto,
                lider:args.lider,
                objetivos: args.objetivos
            })
            return proyectoCreado;
        },
    }
}

export {resolvers}