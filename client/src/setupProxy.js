const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(
    proxy(
      [
        "/api",
        "/api/logout",
        "/upload",
        "/auth/google",
        "/auth/github",
        "/api/addToNewsLetter"
      ],
      {
        target: "http://localhost:5000"
      }
    )
  );
};
