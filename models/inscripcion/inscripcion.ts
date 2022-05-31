import { Schema, model } from 'mongoose'
import { Enum_EstadoInscripcion } from '../enums/enums';
import { ProjectModel } from '../proyecto/proyecto';
import { UserModel } from '../usuario/usuario';

interface Inscription {
    fechaIngreso: Date;
    fechaEgreso: Date;
    estado: Enum_EstadoInscripcion;
    proyecto: Schema.Types.ObjectId;
    estudiante: Schema.Types.ObjectId;
}

const inscripcionSchema= new Schema<Inscription> ({
    estado: {
        type:String,
        enum:Enum_EstadoInscripcion,
        required: true,
    },
    fechaIngreso: {
        type: Date,
        required: true,
    },
    fechaEgreso: {
        type:Date,
        required: true,
    },
    proyecto: {
        type: Schema.Types.ObjectId,
        ref:ProjectModel,
        required: true,
    },
    estudiante: {
        type: Schema.Types.ObjectId,
        ref: UserModel,
        required: true,
    },
})

const InscriptionModel =model('Inscripcion', inscripcionSchema);

export {InscriptionModel};