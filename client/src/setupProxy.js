const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(
    proxy(["/api", "/api/logout", "/auth/google", "/auth/github"], {
      target: "http://localhost:5000"
    })
  );
};
