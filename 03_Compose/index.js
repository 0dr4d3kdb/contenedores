const express = require('express');
const mysql = require('mysql2/promise');
const app = express();
const PORT = 3000;

app.get('/', async (req, res) => {
 try {
  const conn = await mysql.createConnection({
   host: process.env.DB_HOST || 'db',
   user: process.env.DB_USER || 'appuser',
   password: process.env.DB_PASSWORD || 'apppass',
   database: process.env.DB_NAME || 'appdb'
  });
  await conn.query('SELECT 1');
  await conn.end();
  res.send('Hola! La app Node se conecto a MySQL correctamente.');
 } catch (err) {
  res.status(500).send('No pude conectar a MySQL: ' + err.message);
 }
});

app.listen(PORT, () => console.log(`Server en http://localhost:${PORT}`));
