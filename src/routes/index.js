const postRoutes = require("./posts");

const middlewares = (app) => {
  app.use("/", postRoutes);
};

module.exports = middlewares;
