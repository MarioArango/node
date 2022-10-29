//TODO: DATOS EN MEMORIA (RAM), DATOS ALMACENADOS (SDD)
//TODO: Es un monton de datos
//datos se guardan en binario pero se muestran en hexadecimal
//generalmente los Buffers salen de un Stream
//OSEa los buffers son chunks de un stream

//<Buffer 48 6f 6c 61>, cada 00 00 00 00, es un espacio en memoria
//cuando instanciamos un Buffer creamos un memorie slot
//y cada dato se guarda en binario en los slots, y se traem
//mostrandose en hezadecimal, para su facil compresion

//quien nos envia (servidor) debe especificar que tipo de datos es
//y quien los recibe (cliente) debe parsear para obtener lo en lunguaje humano

//TODO: Creamos 26 espacios en memoria
let datosEnMemoriaRam = Buffer.alloc(26)
console.log(datosEnMemoriaRam)//00 00 00 ...
//PARA rellenarlo lo insertamos como a un array, posicion a posicion
for (let i = 0; i < 26; i++) {
    datosEnMemoriaRam[i] = i + 97
}
console.log(datosEnMemoriaRam.toString())


//TODO: Almacenamos sus valores defrente
// let datosEnMemoria = Buffer.from([1, 2, 10])
let datosEnMemoria = Buffer.from("Hola")
console.log(datosEnMemoria.toString())

/**
 * datosEnMemoriaRam, es un memory slot osea un chunk o buffer, este tiene datos inmersos en cada slot 00 "ojo aca es base8 xq asi se lee", estos guardados en binario
 * y leidos en base 8 para que sea mas corto, se lorellena como un array, si creamos 26 slots o 26 espacio en memoria para este memory slot o buffer o chunk,
 * tendremos que rellenar cada slot por una data
 * Un stream es un conjuntos de buffers, ya que este representa un archivo
 */

