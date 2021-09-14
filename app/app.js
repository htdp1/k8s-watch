const express = require("express");
// const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

// const indexRouter = require('./routes/home');
const { k8s } = require("./routes");
const { k8smon } = require("./services");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/home', indexRouter);
app.use("/api/", k8s);

const main = async () => {
  await k8smon.do();
};

main().then();

module.exports = app;
