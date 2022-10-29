//TODO: Una promesa es una clase global que permite trabajar la asincronia con la caracteristica que posee un estado
//resuelto, pendiente, rechazada
const mipromesa = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('mi promesa')
        } else {
            reject('mi error de promesa')
        }
    })
}

const micallbackasincrono = () => {
    setTimeout(() => {
        console.log('mi callback')
    })
}

//TODO: La promesa se ejecuta primero que el callback asincrono, independientemente del orden, porque esta va a la microstack queue,
//que tiene mas prioridad, en cambio el callback va al task queue, que son para tareas mas grandes y de menos prioridad
mipromesa().then(data => {
    console.log(data)
})

micallbackasincrono()