enum Enum_Rol {
    ESTUDIANTE = 'Estudiante',
    LIDER = 'Líder',
    ADMINISTRADOR = 'Administrador',
}

enum Enum_EstadoUsuario {
    PENDIENTE = 'PENDIENTE',
    AUTORIZADO = 'AUTORIZADO',
    NO_AUTORIZADO = 'NO_AUTORIZADO',
}

enum Enum_EstadoProyecto {
    ACTIVO = 'ACTIVO',
    INACTIVO = 'INACTIVO',
}

enum Enum_FaseProyecto {
    INICIADO = 'INICIADO',
    DESARROLLO = 'EN DESARROLLO',
    TERMINADO = 'TERMINADO',
    NULA = '',
}

enum Enum_TipoObjetivo {
    GENERAL = 'GENERAL',
    ESPECIFICO = 'ESPECIFICO',
}

enum Enum_EstadoInscripcion {
    aceptada = 'Aceptada',
    rechazada = 'Rechazada',
}

export { Enum_Rol, Enum_EstadoUsuario, Enum_EstadoProyecto, Enum_FaseProyecto, Enum_TipoObjetivo, Enum_EstadoInscripcion }