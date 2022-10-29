//TODO: Nuesta aplicacion al ejecutarse es un proceso, llamado
//proceso principal, pero tambien podemos ejecutar otro proceso
//en otro nucleo, como no es nuestra apicacion sino algo que
//queremos realizar, se llama proceso secundario, este proceso
//secundario puede ser ejecutar otro programa en otro lenguaje
//de programacion, ejecutar algo en el SO, etc, lo dividimos en

//TODO: EXEC -> devuelve un Buffer al final de ejecutarlo
//Devuelve mensajes de estado simples
//Recibe datos al final de la ejecución.
//trae respuestas concretas en un buffer o memory slot o chunk
//TODO: SPAWN -> devuelve un Stream, chunks = buffers, mientras se va ejecutando
//Devuelva datos binarios enormes, xq representan archivos
// Recibe datos desde que el proceso arranca.