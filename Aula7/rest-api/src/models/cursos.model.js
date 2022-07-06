const { NOMEM } = require("dns");
const sql = require("./db.connection")

// Construtor
const Curso = function (curso) {
    this.name = curso.name;
    this.description = curso.description;
    this.duration = curso.duration;
};

Curso.create = (novoCurso, result) => {
    sql.query("INSERT INTO awari SET ?", novoCurso, (err, res) => {
        if (err) {
            console.log(`error: ${err}`);
            result(err, null);
            return;
        }

        console.log("Curso criado: ", { id: res.insertId, ...novoCurso })

        result(null, { id: res.insertId, ...novoCurso });
    })
};

Curso.findById = (id, result) => {
    sql.query(`SELECT * FROM AWARI WHERE id = ${id}`, (err, res) => {
        if (err) {
            console.log(`error: ${err}`);
            result(err, null);
            return;
        };

        if (res.length) {
            console.log("Curso encontrado: ", res[0]);
            result(null, res)
            return
        };

        result({ retorno: "not_found" });
    })
};

Curso.listAll = (result) => {
    sql.query('SELECT * FROM AWARI', (err, res) => {
        if (err) {
            console.log(`error: ${err}`);
            result(err, null);
            return;
        };
        result(null, res)
    })
}

Curso.updateById = (id, curso, result) => {
    sql.query(
        "UPDATE AWARI SET name = ?, description = ?, duration = ? WHERE id = ?",
        [curso.name, curso.description, curso.duration, id],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }

            if (res.affectedRows == 0) {
                result({ retorno: "not_found" }, null);
                return;
            }

            console.log("updated course: ", { id: id, ...curso });
            result(null, { id: id, ...curso });
        }
    );
};

Curso.remove = (id, result) => {
    sql.query("DELETE FROM AWARI WHERE id = ?", id, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        if (res.affectedRows == 0) {
            result({ retorno: "not_found" }, null);
            return;
        }

        console.log("deleted course with id: ", id);
        result(null, res);
    });
};

module.exports = Curso;
