function routeNotFoundHandler(req, res, next) {
  res.status(404).json({
    error: "Route not found",
  });
}

module.exports = routeNotFoundHandler;
