let debug = require("debug")("app:service:k8s");
const { k8sapi } = require("../api");

exports.get = async (req, res, next) => {
  res.json({ message: "ok" });
  next();
};
