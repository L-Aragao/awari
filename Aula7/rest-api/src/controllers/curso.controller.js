const ModelCurso = require("../models/cursos.model");


exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: 'Body request can not be empty'
        })
    };

    const curso = new ModelCurso({
        name: req.body.nome,
        description: req.body.descricao,
        duration: req.body.duracao
    });

    ModelCurso.create(curso, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Error creating a new course"
            });
        }
        else {
            res.send(data);
        }
    });

}

//GET localhost:3000/find_course?id=1
exports.read = (req, res) => {

    // if(req.query.id) { faz algo}
    // else {faz algo diferente}
    const idCourse = req.query.id ? req.query.id : req.params.id;
    ModelCurso.findById(idCourse, (err, data) => {
        if (err) {
            if (err.retorno === 'not_found') {
                res.status(404).send({
                    message: `Course not found by id: ${idCourse}`
                });
            }
            else {
                res.status(500).send({
                    message: err.message || "Error searching by ID"
                });
            }
        }
        else {
            res.send(data);
        }
    })

}

exports.listAll = (req, res) => {
    ModelCurso.listAll(
        (err, data) => {
            if (err) {
                res.status(500).send({
                    message: err.message || "Error list all courses"
                });
            }
            else {
                res.send(data);
            }
        })
}


exports.update = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    ModelCurso.updateById(
        req.params.id,
        new ModelCurso(req.body),
        (err, data) => {
            if (err) {
                if (err.retorno === "not_found") {
                    res.status(404).send({
                        message: `Not found course with id ${req.params.id}.`
                    });
                } else {
                    res.status(500).send({
                        message: "Error updating course with id " + req.params.id
                    });
                }
            } else res.send(data);
        }
    );
};

exports.delete = (req, res) => {
    ModelCurso.remove(req.params.id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found course with id ${req.params.id}.`
                });
            } else {
                res.status(500).send({
                    message: "Could not delete course with id " + req.params.id
                });
            }
        } else res.send({ message: `Course was deleted successfully!` });
    });
};