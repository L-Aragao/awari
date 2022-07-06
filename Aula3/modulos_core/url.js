//url é modulo para "parsiar" a URL

let url = require('url');
let adr = 'http://localhost:8080/perfil123/fotos/?year=2017&month=february';
let q = url.parse(adr, true);

console.log(q.host); //returns 'localhost:8080'
console.log(q.pathname); //returns '/default.htm'
console.log(q.search); //returns '?year=2017&month=february'

let qdata = q.query; //returns an object: { year: 2017, month: 'february' }
console.log(qdata.month); //returns 'february'
console.log(qdata.year)