const express = require("express");
const router = express.Router();

const createPost = require("../../services/post/createPost");
const getPost = require("../../services/post/getPosts");

router.post("/posts", (req, res) => {
  createPost(req, res);
});

router.get("/posts", (req, res) => {
  getPost(req, res);
});

module.exports = router;
