
const db = require("../config/database");
const md5 = require('md5');



exports.listarUsuarios = async function(){
    const {rows} = await db.query("SELECT * FROM usuario WHERE isAtivo = true")
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
    `SELECT username FROM usuario WHERE username = ${novo_usuario.username}`
    )
    return rows
} 

exports.desativarUsuario = async function(nome, username) {
    const { rows } = await db.query(
      `UPDATE usuario SET isativo = false WHERE nome = $1 AND username = $2`,
      [nome, username]
    );
    return "Usuario desativado com sucesso";
  }
  