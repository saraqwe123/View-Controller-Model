
const db = require("../config/database");
const md5 = require('md5');
const { criarUsuario } = require("../controller/usuario.controller");



exports. listarUsuarios = async function(){
    const {rows} = await db.query("SELECT * FROM usuario WHERE isativo = true")
    return rows
}

exports.criarUsuario = async function(novo_usuario){
    const resposta = await db.query(
        'INSERT INTO usuario (nome, username, senha, isativo) VALUES ($1, $2, $3, $4)',
        [novo_usuario.nome, novo_usuario.username, 

            md5(novo_usuario.senha), true]
    );
    
    return "Produto cadastrado com sucesso!";
}

exports.ProcuraUsername = async function(novo_usuario){
    const {rows} = await db.query(
    `SELECT username FROM usuario WHERE username = '${novo_usuario.username}'`
    )
    return rows
} 

exports.desativarUsuario = async function(usuario) {
    const { rows } = await db.query(
      `UPDATE usuario SET isativo = false WHERE username = '${usuario.username}'`
    );
    return "Usuario desativado com sucesso";
  }
  