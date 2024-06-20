import diaryData from '../../data/diaries';
import { NonSensitiveDiaryEntry, DiaryEntry, Visibility, Weather  } from '../types';


const diaries: DiaryEntry[] = diaryData as DiaryEntry[];


const getEntries = (): DiaryEntry[] => {
  return diaries;
};

const getNonSensitiveEntries = (): NonSensitiveDiaryEntry[] => {
  return diaries.map(({ id, date, weather, visibility }) => ({
    id,
    date,
    weather,
    visibility,
  }));
};

const findById = (id: number): DiaryEntry | undefined => {
  const entry = diaries.find(d => d.id === id);
  return entry;
};

const addEntry = ( date: string, weather: Weather, visibility: Visibility, comment: string ): DiaryEntry => {

const newDiaryEntry = {
  id: Math.max(...diaries.map(d => d.id)) + 1,
  date,
  weather,
  visibility,
  comment,
}

diaries.push(newDiaryEntry);
return newDiaryEntry;

};

export default {
  getEntries,
  addEntry,
  getNonSensitiveEntries,
  findById
};