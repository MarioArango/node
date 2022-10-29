const mifn = (nombre, cb = null) => {
    console.log(nombre + " - 1");
    cb(nombre)
}

console.log('PRIMERO');
//TODO: No es asincrono, es decir no va a la Task Queue, solo respeta el orden de ejecucion
//en esta funxion
//CALLBACKS SINCRONOS, ejecutan "un" "fn" proceso de forma simultanea
//El flujo de ejecución de una función que tiene callbacks se ejecutan en el orden de llamada.
//dentro del scope de la funcion de orden superior
// mifn('mario', (nombre) => {
//     console.log(nombre + " - 2")
// })

//TODO: Este si es un callback asincrono, settimeout, es algo que se ejecuta en el task queue
//CALLBACKS ASINCRONOS, ejecutan de forma no continua, task queu
// mifn('mario', (nombre) => {
//     setTimeout(() => {
//         console.log(nombre + " - 2")
//     });
// })

//TODO: CALLBACK MIXTO, es decir, dentro del cb, que es una funcion que se ejecuta, en el scope
//de la hof, hay codigo sincrono y asincrono
mifn('mario', (nombre) => {
    console.log('INICIO CB');
    setTimeout(() => {
        console.log(nombre + " - 2")
    });
    console.log('FIN CB');
})
console.log('SEGUNDO');

