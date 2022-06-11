import mongoose from "mongoose";

const { Schema, model } = mongoose;

const userSchema = new Schema ({
    correo: {
        type: String,
        required: true,
        unique: true,
        validate:{
            validator: (email) => {
                if (!email.includes('@')){
                    return false
                }
            },
            message: 'El formato del correo electrónico está malo'
        }
    },
    password: {
        type:String,
        required: true,
    },
    identificacion: {
        type: String,
        required: true,
        unique: true
    },
    nombre: {
        type: String,
        required: true,
    },
    apellido: {
        type: String,
        required: true,
    },
    rol:{
        type: String,
        required: true,
        enum: ["ESTUDIANTE", "LIDER", "ADMINISTRADOR"],
    },
    estado:{
        type: String,
        required: true,
        enum: ['PENDIENTE','AUTORIZADO','NO_AUTORIZADO'],
        default: 'PENDIENTE',
    },
},
{
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
})


userSchema.virtual("avancesCreados", {
    ref: "Avance",
    localField: "_id",
    foreignField: "creadoPor",
  });
userSchema.virtual("inscripciones", {
    ref: "Inscripcion",
    localField: "_id",
    foreignField: "estudiante",
  });
const UserModel = model("User", userSchema);

export { UserModel }