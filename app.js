const { crearTabla } = require('./multiplicar/multiplicar');
const argv = require('./yargs/argv').argv;
const colors = require('colors');

let base = argv.base;
let limite = argv.limite;

let maxBase = 10;
let minBase = 0;
if (Number(base)) {
    maxBase = minBase = base;
} else {
    if (!(base === 'all')) {
        console.log(`--base`.blue, ` debe ser un número.`.red);
        return;
    }
};
console.log('======================='.blue);
console.log(`BASE= ${base}, LIMITE: ${limite}`.blue);
console.log('======================='.blue);

switch (argv._[0]) {
    case 'listar':
        t = '';
        for (let b = minBase; b <= maxBase; b++) {
            for (let i = 1; i <= limite; i++) {
                t += `${b}x${i}=${b*i} \n`;
            };
            t += "-----------\n";
        };
        t += "\n";
        console.log(t);
        break;
    case 'crear':
        for (let b = minBase; b <= maxBase; b++) {
            crearTabla(b, limite)
                .then(msg => console.log(msg.green))
                .catch(err => console.log(err.red));
        };
        break;
    default:
        console.log('No reconozco esta instrucción.');
        break;
}
return;


// if (base === "all") {
//     for (let i = 1; i < 10; i++) {
//         crearTabla(i)
//             .then(msg => console.log(msg.green))
//             .catch(err => console.log(err.red));
//     };
// } else {
//     crearTabla(base)
//         .then(msg => console.log(msg.green))
//         .catch(err => console.log(err.red));
// }