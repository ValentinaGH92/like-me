const pool = require("../../db");

const getPosts = async (req, res) => {
  try {
    const result = await pool.query(`SELECT * FROM POSTS`);

    res.status(200).send(result.rows);

    return;
  } catch (error) {
    res.status(500).send({
      message: "Error al insertar el post",
    });

    throw error;
  }
};

module.exports = getPosts;
