const express = require("express");
const path = require("path");
const productsRouter = require("./routes/views/products");
const productsApiRouter = require("./routes/api/products");
const isRequestAjaxOrApi = require("./utils/isRequestAjaxOrApi");
const boom = require("@hapi/boom");
const slash = require("express-slash");
const authApiRouter = require("./routes/api/auth");
const debug = require("debug")("app:server");

const {
  logErrors,
  wrapErrors,
  clientErrorHandler,
  errorHandler,
} = require("./utils/middlewares/errorsHandlers");

// app
const app = express();

// middlewares
app.use(express.json());

// static files
app.use("/static", express.static(path.join(__dirname, "public")));

//slash
app.enable("strict routing");

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// routes
app.use("/products", productsRouter);
app.use(slash());
//app.use("/api/products", productsApiRouter);
productsApiRouter(app)
app.use("/api/auth", authApiRouter);


// redirect
app.get("/", function (req, res) {
  res.redirect("/products");
});


app.use(function (req, res, next) {
  if (isRequestAjaxOrApi(req)) {
    const {
      output: { statusCode, payload },
    } = boom.notFound();

    return res.status(statusCode).json(payload);
  }

  return res.status(404).render("404");
});

// error handlers
app.use(logErrors);
app.use(wrapErrors);
app.use(clientErrorHandler);
app.use(errorHandler);

// server
const server = app.listen(8000, function () {
  debug(`Listening http://localhost:${server.address().port}`);
});
