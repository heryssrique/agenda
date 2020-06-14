//yarn add pg

const Pool = require('pg').Pool;

//1- Abrir a conexão
//2- Executar o comando SQL (query, insert)
//3- Fechar a Conexão

const pool = new Pool({
     user:'kkvmltqygkvcnf',
    password:'52680f75a1092e20fd407a7e0b17eddd3e55d04a58b073c7d4ea4ea0d3a8bedc',
    host:'ec2-35-169-254-43.compute-1.amazonaws.com',
    database:'d7dkc9ht6gmvpe',
    port: 5432,
    ssl: {rejectUnauthorized: false}
})

// const sql = `
// CREATE TABLE IF NOT EXISTS tarefas
//     (
//          id serial primary key,
//          disciplina varchar(100) not null,
//          date varchar (20) not null,
//          entrega boolean not null
//     )

// `;
//  pool.query(sql, function(error, result) {
//   if(error)
//     throw error

//      console.log('Tabela criada com sucesso!');

//  })    

//  INSERT
//  const sql_insert = `
//         INSERT INTO tarefas (disciplina, date, entrega)
//          VALUES
//              ('linguagem de Programação 3', '02/06/2020', false)
            

//   `;

//   pool.query(sql_insert, function(error, result){
//      if(error)
//       throw error;

//       console.log(result.rowCount);

//   })

//   SELECT

//  const sql_select = `SELECT * FROM tarefas`;

//  pool.query (sql_select, function(error, result){
//      if(error)
//      throw error;

//      console.log(result.rows);

//  })

 
