import { ProjectModel } from "../models/proyecto/proyecto";
import { UserModel } from "../models/usuario/usuario"
import { resolversProyecto } from "../models/proyecto/resolvers";
import { resolversUsuario } from "../models/usuario/resolver";
import { resolversAvance } from "../models/avance/resolvers";

const resolversGlobales = {
    
}
export {resolversGlobales}

export const resolvers = [ resolversUsuario, resolversProyecto, resolversAvance];