import express from "express";

import patientServices from "../../service/diagnosesService"

const router = express()

router.get("/", (_req, res) => {
    res.send(patientServices.getPatients())
})

router.get("/:id", (req, res) => {
 const patientsId = patientServices.findById(req.params.id)
  if(patientsId){
    res.send(patientsId)
  }else{
    res.sendStatus(404);
  }
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

