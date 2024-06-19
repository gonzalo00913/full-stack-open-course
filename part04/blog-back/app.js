const cors = require("cors")
const config = require("./utils/config")
const middleware = require("./utils/middleware")
const mongoose = require("mongoose")
const express = require("express");
const app = express();
const blogRouter = require("./controllers/blog")
const usersRouter = require("./controllers/users")
const loginRouter = require("./controllers/login")

mongoose.connect(config.MONGODB_URI)
.then(() =>{
    console.log("✔ Base de datos conectada");
}).catch(() =>{
    console.log("✖ Error al conectar las base de datos");
})


app.use(express.json());
app.use(cors())
app.use(middleware.tokenExtractor)


app.use('/api/login', loginRouter)
app.use("/api/blogs",middleware.userExtractor, blogRouter)
app.use("/api/users", usersRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)


module.exports = app;