import {gql} from 'apollo-server-express'

const tiposEnums = gql`

    enum Enum_EstadoUsuario{
        PENDIENTE
        AUTORIZADO
        NO_AUTORIZADO
    }

    enum Enum_EstadoProyecto{
        ACTIVO
        INACTIVO
    }

    enum Enum_FaseProyecto{
        INICIADO
        DESARROLLO
        TERMINADO 
        NULA
    }

    enum Enum_TipoObjetivo {
        GENERAL
        ESPECIFICO
    }

    enum Enum_Rol{
        ESTUDIANTE
        LIDER
        ADMINISTRADOR
    }

`;
export {tiposEnums}