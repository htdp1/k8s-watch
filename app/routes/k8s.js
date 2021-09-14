const router = require("express").Router();
const { k8s } = require("../services");
router.get("/", k8s.get);

module.exports = router;
