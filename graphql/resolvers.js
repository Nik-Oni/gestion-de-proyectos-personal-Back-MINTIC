import { resolversProyecto } from "../models/proyecto/resolvers.js";
import { resolversUsuario } from "../models/usuario/resolver.js";
import { resolversAvance } from "../models/avance/resolvers.js";
import { resolverInscripciones } from "../models/inscripcion/resolvers.js";

const resolversGlobales = {
    
}
export {resolversGlobales}

export const resolvers = [ resolversUsuario, resolversProyecto, resolversAvance, resolverInscripciones];