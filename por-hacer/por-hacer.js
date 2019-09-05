const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('./db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo grabar');
    });
}
const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }
}
const getListado = (completado) => {
    cargarDB();

    if (completado == undefined) return listadoPorHacer;

    return listadoPorHacer.filter(tarea => tarea.completado === JSON.parse(completado));
}

const actualizar = (descripcion, completado = true) => {
    cargarDB();

    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion); //Devuelve el index de la tarea

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}
const borrar = (descripcion) => {

    cargarDB();

    /*
        let nuevolistado = listadoPorHacer.filter(tarea => {
            return tarea.descripcion !== descripcion;

            if(listadoPorHacer.length === nuevolistado.length){
                return false;
            }else{
                listadoPorHacer=nuevolistado;
                guardarDB();
            }
        });
    */

    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        listadoPorHacer.splice(index, 1);
        guardarDB();
        return true;
    } else {
        return false;
    }

}
const crear = (descripcion) => {
    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    };
    listadoPorHacer.push(porHacer);
    guardarDB();

    return porHacer;
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}