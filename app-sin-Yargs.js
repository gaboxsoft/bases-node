let { crearTabla } = require('./multiplicar/multiplicar');

let base = 0;
let opcionBase = "";

// Revisa si:
// No tiene argumentos, 
if (process.argv.length < 3) {
    console.log(`USO: app --base=[n|all], donde n es un número entero.`);
    return;
} else {
    // No encuentra opción --base 
    // No encuentra el número n de la opción --base=n
    // No es un número n de la opción --base=n
    // n es diferente de "all"
    // console.log(process.argv);
    opcionBase = process.argv.find(a => a.includes('--base'));
    // console.log("---->",
    //     opcionBase === undefined,
    //     opcionBase.split('=').length < 2,
    //     (!Number(opcionBase.split('=')[1]) &&
    //         opcionBase.split('=')[1] != "all"));
    if (opcionBase === undefined ||
        opcionBase.split('=').length < 2 ||
        (!Number(opcionBase.split('=')[1]) &&
            opcionBase.split('=')[1] != "all")) {
        console.log('Debes especificar la base con la opción --base=n, donde n es un número entero o la palabra "all".');
        return;
    }
}
base = opcionBase.split('=')[1];
console.log(opcionBase);

if (base === "all") {
    for (let i = 1; i < 10; i++) {
        crearTabla(i)
            .then(msg => console.log(msg))
            .catch(err => console.log(err));
    };
} else {
    crearTabla(base)
        .then(msg => console.log(msg))
        .catch(err => console.log(err));
}