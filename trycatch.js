//TODO: try catch, evitan que nuestro proceso se bloquee y detenga "entendido como que nustra aplicacion deje de funcionar", 
//debido a un error externo, el cual no dependemos, por eso se suele utilizar en peciones de recursos a servidores
//Cabe resaltar que un if - else, generan dos tramos para la ejecucion de nustro codigo, sin embargo estos no cancelan nuestra app "proceso"
//encambio el try catch, esta pensado en que no se detenga nustra aplicaicon o proceso

const mipeticionpromesa = () => {
    return new Promise((resolve, reject) => {
        if (false) {
            resolve('OK')
        } else {
            reject('ERROR')
        }
    })
}

//TODO: En el caso de las promesas, no hay necesidad de uso, ya que estas reciben el error externo en el catch
try {
    // mipeticionpromesa()
    //     .then(data => {
    //         console.log(data)
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //     })
} catch (error) {
    // console.log(error)
}

//TODO: Suelen usuarse en funciones asincronas, dentro de estas, ya que fuera, ahoramos la repeticion de codigo y hacemos que esta funcion se ejecute y siga el flujo
//ya sea ok o error

// const mipeticionasincawait = async () => {
//     try {
//         const data = await fetch('asdasd')
//         console.log('data')
//     } catch (error) {
//         console.log('error');
//     }
// }
// mipeticionasincawait()



//TODO:Este caso en si es una mala practica, pero nos ayuda a entender dos cosas, al ser una funcion sincrona, cuando llega al callstack la ejecuta y como hay un error ejecuta el catch
//En el caso de que la funcion sea asincrona, llega al callstack, este ve que es async y la envia al micostack, sin embargo el callstack si logro ejecutarla, y eso lo podemos ver en que
//su ejecucion o tarea del callstack fue llevarlo al microstack, por eso no ejecuto el catch, sin ambargo cuando le toque ejcutarse, este no estara envuelta en un trycatch, porque que
//se cortara la ejecuion y nuestra aplicacion dara error, en consecuencia crashea o se detiene

//TODOO FUNCION SINCRONA, TODO OK, PORQUE EL CALLSTACK LA EJECUTA Y COMO HAY ERROR EJECUTA EL CATCH
//MISMO HILO PRINCIPAL, PORQUE ES SINCRONO
// const mipeticionasincawaitSincrona = () => {
//     return a + 1
// }

// try {
//     mipeticionasincawaitSincrona()
// } catch (error) {
//     console.log('hubo un error')
// }


//TODO: SALDRA ERROR PORQUE LA EJECUCION DEL CALLSTACK ES LLEVARLO AL MICROSTACK, Y LO LOGRA POR ESO NO EJECUTA EL CATCH,
//SIN EMBARGO CUANDO LE TOQUE EJECUTARSE A LA FUNCION HABRA UN ERROR Y LA APLICAICON DE CRASHEA
//LO ENVIA A LA ESPERA DE LA RESPUESTA DE OTRO HULO
const mipeticionasincawaitAsincrona = async () => {
    return a + 1
}

try {
    //AL SER ASINCRONA, LA MISION DEL TRY, ES INTENTAR LLEVARLO DEL CALLSTACK AL MICROSTACK Y LO LOGRA "hilo principal, nustro proceso"
    mipeticionasincawaitAsincrona()
} catch (error) {
    console.log('hubo un error')
}
    //SIMULACION, ASINCRONISMO
    //POR ESO LUEGO CUANDO SE EJECUTA SALDRA ERROR, PORQUE SE EJECUTARA SIN EL TRYCATCH
    // mipeticionasincawaitAsincrona()

//TODO: POR ESO EN FUNCIONES ASINCRONAS "ASYNC AWAIT", EL TRY CATCH DEBE IR DENTRO, YA QUE CUANDO LE TOQUE EJECUTARSE
//LO ENVIARA AL MICROSTACK, ESTE OBTENDRA UN RESULTADO Y LUEGO SE EJECUTA RECORDANDO SU SCOPE OSEA EL TRYCATCH 
