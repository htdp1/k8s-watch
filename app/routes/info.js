const router = require("express").Router();

router.get("/", async (req, res, next) => {
  res.json({ message: "ok" });
  next();
});

module.exports = router;
