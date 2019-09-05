const tarea = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripción de la tarea por hacer'
    },
    completado: {
        default: true,
        alias: 'c',
        desc: 'Marca como completado o pendiente la tarea'
    }
}
const filtroCompletado = {
    completado: {
        alias: 'c',
        desc: 'Muestra las tareas con el filtro completado '
    }
}

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', tarea)
    .command('actualizar', 'Actualizar el estado completado de una tarea', tarea)
    .command('borrar', 'Elimina una tarea', tarea)
    .command('listar', 'Lista las tareas', filtroCompletado)
    .help()
    .argv;

module.exports = {
    argv
}