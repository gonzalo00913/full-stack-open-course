import express from "express";
import cors from "cors";

import diagnosesRouter from "./routes/diagnoses"
import patientsRouter from "./routes/patients"

const server = express()

server.use(cors())
server.use(express.json());


server.use("/diagnoses", diagnosesRouter)
server.use("/patients", patientsRouter)

const PORT = 3001

server.listen(PORT,() => {
  console.log(`server runnin port ${PORT}`);
        
})