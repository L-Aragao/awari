const express = require('express');
const app = express();
const routes = require('./route');

//necessario para lidar com o POST
app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.listen(3000, () => {
  console.log('Acessar http://localhost:3000');
  console.log('Servidor executando na porta 3000');
});