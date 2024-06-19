import express from "express";

import patientServices from "../../service/diagnosesService"

const router = express()

router.get("/", (_req, res) => {
    res.send(patientServices.getPatients())
})


export default router;