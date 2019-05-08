if (process.env.NODE_EMV === "production") {
  module.exports = require("./prod.js");
} else {
  module.exports = require("./dev.js");
}
