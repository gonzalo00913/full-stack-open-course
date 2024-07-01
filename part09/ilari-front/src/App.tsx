import { useEffect, useState } from "react";
import diaryService from "./services/diaries";
import { NonSensitiveDiaryEntry } from "./types";

function App() {
  const [diaries, setDiaries] = useState<NonSensitiveDiaryEntry[]>([]);

  useEffect(() => {
    const fetchDiariesList = async () => {
      try {
        const diaries = await diaryService.getAll();
        setDiaries(diaries);
      } catch (error) {
        console.error("Error fetching diaries:", error);
      }
    };

    fetchDiariesList();
  }, []);

  return (
    <div>
      <h1>Add new entry</h1>
      <form action="">
        <div>date<input type="text" /></div>
        <div>visibility<input type="text" /></div>
        <div>weather<input type="text" /></div>
        <div>comment<input type="text" /></div>
        <button type='submit'>add</button>
      </form>
      <ul>
        {diaries.map(diary => (
          <li key={diary.id}>
            <h4>{diary.date}</h4>
            <div>weather: {diary.weather}</div>
            <div>visibility: {diary.visibility} </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

