
const express = require('express');
const Pool = require('pg').Pool;
const cors = require('cors'); 

const pool = new Pool({
    user:'kkvmltqygkvcnf',
    password:'52680f75a1092e20fd407a7e0b17eddd3e55d04a58b073c7d4ea4ea0d3a8bedc',
    host:'ec2-35-169-254-43.compute-1.amazonaws.com',
    database:'d7dkc9ht6gmvpe',
    port: 5432,
    ssl: {rejectUnauthorized: false}
});
  
const server = express();

server.use(cors());

server.use(express.json());

//GET
server.get('/agenda', async function(request, response) {
   result = await pool.query('SELECT * FROM agendas');

   return response.json(result.rows);
})

server.get('/agenda/search', async function(request, response) {
    const titulo = request.query.titulo;
    const sql = `SELECT * FROM agendas WHERE titulo ILIKE $1`;
    const result = await pool.query(sql, ["%" +  titulo + "%"]);
    return response.json(result.rows);
})

server.get('/agenda/:id', async function(request, response) {
    const id = request.params.id;
    const sql = `SELECT * FROM agendas WHERE id = $1`
    const result = await pool.query(sql, [id]);
    return response.json(result.rows);
})


//POST
server.post('/agenda', async function(request, response) {
    const titulo = request.body.titulo;
    const date = request.body.date;
   // const entregue = request.body.stats;
    const sql= `INSERT INTO agendas (titulo, date, stats) VALUES ($1, $2, $3)`;
    await pool.query(sql, [titulo, date, false]);
    return response.status(204).send();
})


//DELETE
server.delete('/agenda/:id', async function(request, response) {
    const id = request.params.id;
    const sql = `DELETE FROM agendas WHERE id = $1`;
    await pool.query(sql, [id]);
    return response.status(204).send();
})


//UPDATE
server.put('/agenda/:id', async function(request, response) {
    const id = request.params.id;
    const { titulo, date, stats} = request.body;
    const sql = `UPDATE agendas SET titulo = $1, date = $2, stats = $3 WHERE id = $4`;
    await pool.query(sql, [titulo, date, stats, id]);
    return response.status(204).send();
})


//UPDATE Do Entregue
server.patch('/agenda/:id/stats', async function(request, response) {
    const id = request.params.id;
    const sql = `UPDATE agendas SET stats = true WHERE id = $1`;
    await pool.query(sql, [id]);
    return response.status(204).send();
})

server.patch('/agenda/:id/pendente', async function(request, response) {
    const id = request.params.id;
    const sql = `UPDATE agendas SET stats = false WHERE id = $1`;
    await pool.query(sql, [id]);
    return response.status(204).send();
});



server.listen(process.env.PORT || 3000); 
