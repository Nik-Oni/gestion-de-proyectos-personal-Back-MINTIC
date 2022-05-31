import {gql} from 'apollo-server-express'
import { tiposEnums } from '../models/enums/tipos.js';
import { tiposProyecto } from '../models/proyecto/tipos.js';
import { tiposUsuario } from '../models/usuario/tipos.js';
import { tiposAvance } from '../models/avance/tipos.js';

const tiposGlobales = gql`
    scalar Date
`;
export {tiposGlobales}

export const tipos = [tiposGlobales, tiposEnums, tiposProyecto, tiposUsuario, tiposAvance];