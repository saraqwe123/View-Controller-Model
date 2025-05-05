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

<<<<<<< HEAD
exports.desativarUsuario = async function(req, res) {

    if (usuarioRN.IsDesativar(username)) { 
        await usuarioDAO.desativarUsuario(username);
=======
exports.validandoDesativacao = async function(novo_usuario) {
    let username = await usuarioDAO.ProcuraUsername(novo_usuario)
    if (usuarioRN.IsDesativar(nome, username)) { 
        await usuarioDAO.desativarUsuario(nome, username);
>>>>>>> 511eadf61e7fe28545db84c62e2aa234091df3aa
        res.redirect('/listarUsuarios');
        return true;
    }
    return false;
};


