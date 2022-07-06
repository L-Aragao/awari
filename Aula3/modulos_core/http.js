//O HTTP  é um modulo que pode criar servidores que escutam em determinada porta e responde

//modo es de importaçao 
// import { createServer } from 'http';

const http = require('http');

// cria um objeto do tipo servidor:
http.createServer(function (req, res) {
  res.write('Primeiro Serviço!'); //escreve uma resposta para o client
  res.write(req.url);
  res.end(); //finaliza a resposta
}).listen(8080); //o servidor vai escutar na porta 8080
// http://localhost:8080/primeiapagina



//Exemplo com modulo URL e Http
// let http = require('http');
// let url = require('url');

// http.createServer(function (req, res) {
//   res.writeHead(200, { 'Content-Type': 'text/html' });
//   let q = url.parse(req.url, true).query;
//   let txt = q.year + " " + q.month;
//   res.end(txt);
// }).listen(8080);

//url para teste http://localhost:8080/?year=2022&month=May