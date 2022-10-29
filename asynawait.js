//TODO: Independientemente de que saldra error, porque fetch existe en el window, no en node, primero se ejecutara
//la funcion async, y lo que esta adentro sera asincrono respecto al await, este tambien se aloja en el microstack queue
//TODO: En base a esto, tambien se puede usar una funcion asincrona, para que dentro del await darle orden a la ejecucion

//TODO: si antes del await hay codigo sincrono, este se ejecutara, todo lo que esta debajo del await pasara a la task schedule
//y el await a un nucleo para la respuesta externa, luego este con el codigo bajo el pasara a la microtask queue

const miasincawait = async () => {
    try {
        console.log('antes del await')
        const data = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        console.log(data)
    } catch (error) {
        console.log('error')
    }
}

const micallbackasincrono = () => {
    setTimeout(() => {
        console.log('mi callback')
    })
}

miasincawait()
micallbackasincrono()