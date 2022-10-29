//TODO: para poder ocmpilar modulos nativos en nodejs necesitamos
//instalar npm i node-gyp

//TODO: para configurar la ejecucion de modulos naativos, creamos
//el modulo binding.gyp

//finalmente ejecutamos -> node-gyp configure, crea una carpeta build
//del modulo nativo

//Luego ejecutamos node-gyp build, y crea una carpeta release,
//esta contiene nuestro modulo nativo en binario
//si "addon"