import express from "express";
import diaryService from "../service/diaryService";

const router = express()

router.get("/", (_req, res) => {
    res.send(diaryService.getNonSensitiveEntries())
})

router.post("/", (_req, res) => {
    res.send("Sabing a diary!")
})


export default router;