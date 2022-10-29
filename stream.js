//TODO: Es un proceso en que pasan un monton de datos "buffers"
//es decir van llegando buffers como chunks, cada uno de ellos contiene
//datos que solicitemos, ejm: video de youtube, carga poco a poco
//no cuando todo el video este completo, videos en vivo "streams"

//TODO: EXISTEN 3 TIPOS DE STREAM
//1. DE LECTURA: pedimos chunks para mostrarlo
//2. DE ESCRITURA: vamos insertando chunks
//3. DE DOBLE SENTIDO: vamos pidiendo y vamos insertando

const fs = require('fs')

let data = ""

//TODO: Leemos chunks del archivo
//PODEMOS LEER UN ARCHIVO DE DOS FORMAS, TODO DEFRENTE SI ES PEQUEÑO
//O POR PARTES SI ES PESADO, EN ESTE CASO POR PARTES CON STREAM
let readableStream = fs.createReadStream(__dirname + "/input.txt")
//si siempre viene en una codificacion concreta, osea siempre string
readableStream.setEncoding("utf-8")
//leemos
readableStream.on("data", (chunk) => {
    // console.log(chunk)
    // console.log(chunk.toString())
    console.log(data)
    data += chunk;
    console.log(data)
})

//Tambien podemos decirle, pide por trozo y CUANDO termine nos 
//nos muestras, otra aplicaion es si nos llega el chuk 36, y se quedo ahi, cuando
//recupere la conexcion decirle en cual se quedo, y leer a partir del siguiente osea 37
readableStream.on('end', () => {
    console.log(data)
})

//TODO: ESCRIBIMOS

//PROBAR UN TRY CATSH Y UN BS PARA DEBAJO, PARA VER SI SE EJECUTA EL CB CUANDO DA ERROR