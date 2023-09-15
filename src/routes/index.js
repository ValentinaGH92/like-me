const postRoutes = require("./posts");

const routes = (app) => {
  app.use("/", postRoutes);
};

module.exports = routes;
