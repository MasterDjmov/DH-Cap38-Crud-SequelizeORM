const path = require('path');
const dataUsers = require('../services/datasource');   //clase
const dataUser = new dataUsers(path.resolve(__dirname,'../data/users.json'));
const autologin =async (req,res,next)=>{
    console.log("dentro de cookie");
    if(req.cookies.usuarioCokkie){
        console.log("El usuario puede Autologear, se encontro cooki");
        //consulto si existe este usuario
        const usuarios = await dataUser.load();
        const existe = usuarios.find(user => {
        if(user.idUser == req.cookies.usuarioCokkie){
            return user;
        }
        })
        //una vez localizado lo cargo en session 
        req.session.usuario = existe;
        console.log("autologin completado con exito");
    }else{
        console.log("no se encontro cookie, no hay autologin");
    }
    next(); //nunca olvidar o se queda esperando
}

module.exports = autologin