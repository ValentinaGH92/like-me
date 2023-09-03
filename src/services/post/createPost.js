const pool = require("../../db");

const createPost = async (req, res) => {
  try {
    const { title, img } = req.body;

    const result = await pool.query(
      `INSERT INTO posts (titulo, img) VALUES ('${title}', '${img}')`
    );

    if (result.rowCount === 1)
      res.status(200).send({
        message: "Post insertado correctamente",
        status: 200,
      });

    return;
  } catch (error) {
    res.status(500).send({
      message: "Error al insertar el post",
    });

    throw error;
  }
};

module.exports = createPost;
