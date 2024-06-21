import express from "express";
import diaryService from "../service/diaryService";

const router = express();

router.get("/", (_req, res) => {
  res.send(diaryService.getNonSensitiveEntries());
});

router.get("/:id", (req, res) => {
  const diary = diaryService.findById(Number(req.params.id));

  if (diary) {
    res.send(diary);
  } else {
    res.sendStatus(404);
  }
});

router.post("/", (req, res) => {
  const {date, weather, visibility, comment} = req.body;
  const newDiaryEntry = diaryService.addEntry(
    date,
    weather,
    visibility,
    comment,
  )
  res.send(newDiaryEntry);
});

export default router;
