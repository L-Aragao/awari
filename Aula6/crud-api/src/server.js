const express = require('express');
const server = express();
const routes = require('./routes')

//necessario para lidar com o POST / PUT / PATC - content-type: application/x-www-form-urlencoded 
server.use(express.urlencoded({ extended: true}));

//conseguimos trabalhar com request body com json
server.use(express.json())

server.use(routes);

server.listen(3000, () => {
    console.log('Server is running on port 3000')
})
