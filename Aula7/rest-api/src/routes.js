const cursoController = require("./controllers/curso.controller");
const router = require("express").Router();

//CRUD
router.post('/create_course', cursoController.create);
router.get('/read_course', cursoController.read);
router.get('/read_all_courses', cursoController.listAll);
router.get('/read_course/:id', cursoController.read);
router.put("/update_course/:id", cursoController.update);
router.delete("/delete_course/:id", cursoController.delete);

//Restful começa pelos endpoints, mas tem mais...
// router.post('/courses', cursoController.create);
// router.get('/courses', cursoController.read);
// router.get('/courses/:id', cursoController.read);
// router.get('/courses/all', cursoController.listAll);
// router.put("/courses/:id", cursoController.update);
// router.delete("/courses/:id", cursoController.delete);

// O Mais é:
// Sistema no formato cliente-servidor
// Comunicação stateless
// Capacidade de armazenar dados em cache
// Interface uniforme
// Sistema de camadas

// Material de apoio sobre APIs e Restful: https://www.hostgator.com.br/blog/api-restful/


module.exports = router;
