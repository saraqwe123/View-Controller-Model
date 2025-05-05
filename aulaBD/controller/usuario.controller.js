const usuarioDAO = require("../model/usuario.dao");
const usuarioRN = require("../model/usuario.rn")

exports.listarUsuarios = async function(){
    return usuarioDAO.listarUsuarios();
};

exports.criarUsuario = async function(novo_usuario){
    if(usuarioRN.validarUsername(novo_usuario.username) && usuarioRN.IsUsername(novo_usuario.username)){

        await usuarioDAO.criarUsuario(novo_usuario);
        return true;
    };
    return false;
};''

exports.desativarUsuario = async function(req, res) {

    if (usuarioRN.IsDesativar(username)) { 
        await usuarioDAO.desativarUsuario(username);
        res.redirect('/listarUsuarios');
        return true;
    }
    return false;
};


