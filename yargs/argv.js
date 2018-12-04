const opciones = {
    base: {
        demandOption: true,
        alias: 'c',
        default: 'all'
    },
    limite: {
        default: 6,
        alias: 'l'
    }
};
const argv = require('yargs')
    .command(
        ['crear', 'listar'],
        'Muestra una tabla de multiplicar en pantalla',
        opciones)
    .help()
    .argv;

module.exports = {
    argv
};