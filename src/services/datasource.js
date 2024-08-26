/**
 * datasource me sirve como servicio, me brinda metodos para el manejo de archivos
 */
let fs = require('fs').promises;
const path = require('node:path');

class Datasource {
    constructor(filePath){
        this.filePath = filePath;
    }
    async load(){
        let infoArchivo = await fs.readFile(this.filePath,"utf-8")
        return JSON.parse(infoArchivo);
    }
    async save(data){
        let jsonData = JSON.stringify(data, null, 2);
        try {
            await fs.writeFile(this.filePath, jsonData, "utf-8");
            console.log("Archivo guardado correctamente");
          } catch (error) {
            console.error("Error al escribir el archivo:", error);
            // Manejo adicional del error si es necesario
          }
    }
   
}


module.exports = Datasource;