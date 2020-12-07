const fs = require('fs');
const colors = require('colors')
let data = ''


let listar = (base, limite) => {


    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}\n`);
    }

}
let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('No es un numero')
            return
        }

        for (let i = 1; i <= limite; i++) {
            data += (`${base} * ${i} = ${base * i}\n`);
        }

        fs.writeFile(`tablas/tabla del ${base}`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}.txt`.red)
        });
    })
}

// importar modulos

module.exports = {
    crearArchivo,
    listar
}