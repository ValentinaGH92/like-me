const pool = require("../../db");

const updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    if (updates.id) delete updates.id;

    const updatesValues = [];

    for (const key in updates) {
      if (typeof updates[key] === "number")
        updatesValues.push(`${key} = ${updates[key]}`);
      else updatesValues.push(`${key} = '${updates[key]}'`);
    }

    const result = await pool.query(
      `UPDATE posts SET ${updatesValues.join()} WHERE id = ${id};`
    );

    if (result.rowCount === 1)
      res.status(200).send({
        message: "Post actualizado correctamente",
        status: 200,
      });

    if (result.rowCount === 0)
      res.status(404).send({
        message: "Not found",
        status: 404,
      });
  } catch (error) {
    res.status(500).send({
      message: "Error al insertar el post",
    });

    throw error;
  }
};

module.exports = updatePost;
