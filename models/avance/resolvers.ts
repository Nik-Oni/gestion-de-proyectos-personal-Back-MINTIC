import { ModeloAvance } from "./avance"


const resolversAvance = {
    Query: {
        Avances: async (parents, args) => {
            const avances = await ModeloAvance.find();
            return avances
        }
    },
    Mutation: {
        crearAvance: async (parents, args) =>{
            const avanceCreado = await ModeloAvance.create({
                fecha: args.fecha,
                descripcion: args.descripcion,
                proyecto: args.proyecto,
                creadoPor: args.creadoPor
            })
        }
    }
}

export {resolversAvance};