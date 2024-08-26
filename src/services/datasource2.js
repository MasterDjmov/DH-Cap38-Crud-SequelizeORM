const { error } = require('node:console');
const fs = require('node:fs/promises');
const path = require('node:path');

const datasource = {
    filePath: path.resolve(__dirname, "../data/contacts.json"),

  async load() {
    //metodo viejo
    /*const jsonMovies = await fs.readFile(this.filePath, "");
    console.log(jsonMovies);
    const movies = JSON.parse(jsonMovies);
    return movies;*/

    //metodo usando promesas
    return fs.readFile(this.filePath,"utf-8")
    .then(function(datos){
      console.log("consecuencia"+datos);
      const conjuntoDatosParseado = JSON.parse(datos);
      return conjuntoDatosParseado;
    })
    .catch(function(error){
      console.log("Error de acceso al archivo");
      return null;
    })
  },
  async save(data) {
    const jsonData = JSON.stringify(data, null, 2);
    try {
      await fs.writeFile(this.filePath, jsonData, "utf-8");
      console.log("Archivo guardado correctamente");
    } catch (error) {
      console.error("Error al escribir el archivo:", error);
      // Manejo adicional del error si es necesario
    }
  }
}

module.exports = datasource;