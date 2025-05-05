const { ProcuraUsername } = require("./usuario.dao");

exports.validarUsername = function(username) {
    if (username.length >= 8) {
        let letrasMaiusculas = 0 
        let digitos = 0
        let charEspeciais = 0
        for (let i = 0; i < username.length; i++) {
            if (/[A-Z]/.test(username[i])) {
               letrasMaiusculas += 1
               console.log(letrasMaiusculas);
               
            }
            
            if (/[0-9]/.test(username[i]) ) {
                digitos +=1
                console.log(digitos);
            }
            
            if (/\W|_/.test(username[i])) {
                charEspeciais +=1
                console.log(charEspeciais);
            }
        }
        if (letrasMaiusculas >= 1 && digitos >= 1 && charEspeciais >= 1) {
            console.log("ta certo")
            console.log(`${letrasMaiusculas} e ${digitos} e ${charEspeciais}`);
            
            return true
        }
    }
    return false;
};


exports.IsUsername = function(username) {
    if (ProcuraUsername(username) == true ){
        return true 
    } 
    return false
}

exports.IsDesativar = function(nome, username) {
    return nome && username
}