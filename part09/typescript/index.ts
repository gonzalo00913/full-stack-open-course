import express, { Request, Response } from 'express';
import calculateBmi from './bmiCalculator';
const app = express();

app.get('/hello', (_req: Request, res: Response) => {
  res.send('Hello Full Stack');
});

app.get('/bmi', (req: Request, res: Response) => {
  const { height, weight } = req.query;

  if (!height || !weight) {
    return res.status(400).json({ error: 'malformatted parameters' });
  }

  const heightNum = Number(height);
  const weightNum = Number(weight);

  if (isNaN(heightNum) || isNaN(weightNum)) {
    return res.status(400).json({ error: 'malformatted parameters' });
  }

  const bmi = calculateBmi(heightNum, weightNum);

  return res.json({
    weight: weightNum,
    height: heightNum,
    bmi,
  });
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
