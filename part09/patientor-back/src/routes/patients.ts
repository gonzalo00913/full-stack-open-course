import express from "express";

import patientServices from "../../service/diagnosesService"

const router = express()

router.get("/", (_req, res) => {
    res.send(patientServices.getPatients())
})

/* router.post("/", (req, res) => {
  const {name, dateOfBirth, ssn, gender, occupation} = req.body
  const addPatient = patientServices.addPatient(
    name, 
    dateOfBirth, 
    ssn, 
    gender, 
    occupation
  )
  res.json(addPatient)
}) */

export default router;

