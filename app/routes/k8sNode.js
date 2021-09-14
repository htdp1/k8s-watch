const router = require("express").Router();
const { K8SAPI } = require("../api");

router.get("/", async (req, res, next) => {
  const result = await K8SAPI.api.listNode();
  res.json(result);
  next();
});

module.exports = router;
