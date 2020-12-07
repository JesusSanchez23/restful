// Se desestructura para poder usar la funcion directamente sin necesidad de escribir multiplicasion.crearArchivo y solo poner crearArchivo

const argv = require('./config/yargs').argv;
const colors = require('colors')

const { crearArchivo, listar } = require('./multiplicar/multiplicar')


let comando = argv._[0];

switch (comando) {
    case 'listar':
        listar(argv.base, argv.limite)
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => {
                console.log(`El archivo de ${archivo} fue creado`.blue);
            })
            .catch(err => {
                console.log('A ocurrido un error', err);
            })
        break;

    default:
        console.log('nada');
}


// let parametro = argv[2];
// let base = parametro.split('=')[1]
// crearArchivo(base)
//     .then(archivo => {
//         console.log(`El archivo de ${archivo} fue creado`);
//     })
//     .catch(err => {
//         console.log('A ocurrido un error', err);
//     })