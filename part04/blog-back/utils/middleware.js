const jwt = require('jsonwebtoken');
const User = require('../models/user')


const tokenExtractor = (request, response, next) => {
  const authorization = request.get('authorization');

  if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
    request.token = authorization.substring(7);
  } else {
    request.token = null;
  }
  console.log('Token in tokenExtractor:', request.token); 
  next();
};

const userExtractor = async (request, response, next) => {
  try {
    const token = request.token;
    if(!token) {
      return response.status(401).json({ error: 'token missing' });
    }

    const decodedToken = jwt.verify(token, process.env.SECRET)
    if (!decodedToken.id) {
      return response.status(401).json({ error: 'token missing or invalid' })
    }

    const user = await User.findById(decodedToken.id);
    if (!user) {
      return response.status(401).json({ error: 'user not found' });
    }

    request.user = user;
    next();
  } catch (error) {
    next(error);
  }
};

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: "Ruta desconodida" });
};

const errorHandler = (error, request, response, next) => {
  if (error.name === "ValidatorError") {
    return response.status(400).json({ error: error.message });
  }
  if (error.name === "CastError") {
    return response.status(400).json({ error: error.message });
  }
  if (error.name === "JsonWebTokenError") {
    return response.status(400).json({ error: error.message });
  }
  if (error.name === "TokenExpiredError") {
    return response.status(401).json({
      error: "token expired",
    });
  }

  next(error);
};

module.exports = {
  unknownEndpoint,
  errorHandler,
  tokenExtractor,
  userExtractor
};
