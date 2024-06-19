const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: "unknown endpoint" });
};

const errorHandler = (error, req, res, next) => {
  if (error.name === "SequelizeValidationError") {
    return res.status(400).json({ error: error.message });
  }

  next(error);
}

module.exports = {
  errorHandler,
  unknownEndpoint
};
