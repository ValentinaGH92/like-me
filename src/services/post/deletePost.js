const pool = require("../../db");

const deletePost = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await pool.query(`DELETE FROM posts WHERE id = '${id}'`);

    if (result.rowCount === 1)
      res.status(201).send({
        message: "Post eliminado correctamente",
        status: 201,
      });

    return;
  } catch (error) {
    res.status(500).send({
      message: "Error al insertar el post",
    });

    throw error;
  }
};

module.exports = deletePost;
