const fs = require('fs');
// const colors = require('colors');


crearTabla = async(base, limiteSup = 10) => {

    return new Promise((resolve, reject) => {
        let t = "";
        if (!Number(base)) {
            reject(`[${base}] no es un número.`)
            return;
        }
        const limiteInf = 0;
        for (let i = 0; i <= limiteSup; i++) {
            t += `${base}x${i}=${base*i} \n`;
        }
        t += "\n";
        let nombreArchivo = `tablasMultiplicar\\tabla-del-${base}-desde-${limiteInf}-hasta-${limiteSup}.txt`;
        fs.writeFile(nombreArchivo, t, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(nombreArchivo);
            }
        });
    })
}
module.exports = {
    crearTabla
}