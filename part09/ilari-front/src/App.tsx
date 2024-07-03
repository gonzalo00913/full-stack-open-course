import { useEffect, useState } from "react";
import diaryService from "./services/diaries";
import { NonSensitiveDiaryEntry, NewDiaryEntry } from "./types";

function App() {
  const [diaries, setDiaries] = useState<NonSensitiveDiaryEntry[]>([]);
  const [newDiary, setNewDiary] = useState<NewDiaryEntry>({
    date: "",
    weather: "sunny",
    visibility: "great",
    comment: ""
  })
  const [error, setError] = useState<string | null>(null);

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

  const addDiary = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const createDiary = await diaryService.create(newDiary)
      setDiaries(diaries.concat(createDiary))
      setNewDiary({ date: "", weather: "sunny", visibility: "great", comment: "" });
    } catch (error) {
      setError("Error adding diary entry");
    }
  }

 const handleDiaryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setNewDiary({
      ...newDiary,
      [name]: value
    });
  };

  return (
    <div>
      <h1>Add new entry</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={addDiary}>
        <div>
          date
          <input type="text" name="date" value={newDiary.date} onChange={handleDiaryChange} />
        </div>
        <div>
          visibility
          <input type="text" name="visibility" value={newDiary.visibility} onChange={handleDiaryChange} />
        </div>
        <div>
          weather
          <input type="text" name="weather" value={newDiary.weather} onChange={handleDiaryChange} />
        </div>
        <div>
          comment
          <input type="text" name="comment" value={newDiary.comment} onChange={handleDiaryChange} />
        </div>
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

