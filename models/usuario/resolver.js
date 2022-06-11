import { UserModel } from "./usuario.js";
import bcrypt from "bcrypt";

const resolversUsuario = {
  Query: {
    Usuarios: async (parent, args, context) => {
      console.log("context", context);
      const usuarios = await UserModel.find().populate("inscripciones");
      return usuarios;
    },
    Usuario: async (parent, args) => {
      const usuario = await UserModel.findOne({ _id: args._id });
      return usuario;
    },
  },
  Mutation: {
    crearUsuario: async (parent, args) => {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(args.password, salt);
      const usuarioCreado = await UserModel.create({
        nombre: args.nombre,
        apellido: args.apellido,
        identificacion: args.identificacion,
        correo: args.correo,
        rol: args.rol,
        password: hashedPassword,
      });
      console.log("usuario creado", usuarioCreado);

      if (Object.keys(args).includes("estado")) {
        usuarioCreado.estado = args.estado;
      }

      return usuarioCreado;
    },
    editarUsuario: async (parent, args) => {
      const usuarioEditado = await UserModel.findByIdAndUpdate(
        args._id,
        {
          nombre: args.nombre,
          apellido: args.apellido,
          identificacion: args.identificaicon,
          correo: args.correo,
          estado: args.estado,
        },
        { new: true }
      );
      return usuarioEditado;
    },
    eliminarUsuario: async (parent, args) => {
      if (Object.keys(args).includes("_id")) {
        const usuraioEliminado = await UserModel.findOneAndDelete({
          _id: args._id,
        });
        return usuraioEliminado;
      } else if (Object.keys(args).includes("correo")) {
        const usuraioEliminado = await UserModel.findOneAndDelete({
          correo: args.correo,
        });
        return usuraioEliminado;
      }
    },
  },
};

export { resolversUsuario };
