const express = require("express");
const router = express.Router();

const createPost = require("../../services/post/createPost");
const getPost = require("../../services/post/getPosts");
const updatePost = require("../../services/post/updatePost");
const deletePost = require("../../services/post/deletePost");

router.post("/posts", (req, res) => {
  createPost(req, res);
});

router.get("/posts", (req, res) => {
  getPost(req, res);
});

router.put("/posts/:id", (req, res) => {
  updatePost(req, res);
});

router.delete("/posts/:id", (req, res) => {
  deletePost(req, res);
});

module.exports = router;
