import express from "express";

import diagnosesService from "../../service/diagnosesService"

const router = express()

router.get("/", (_req, res) => {
    res.send(diagnosesService.getDiagnoses())
})

router.get("/", (_req, res) => {
    res.send(diagnosesService.getPatients())
})


export default router;