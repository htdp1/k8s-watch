let debug = require("debug")("app:service:k8s");

exports.get = async (req, res, next) => {
  res.json({ message: "ok" });
  next();
};
