import axios from "axios";
import { NonSensitiveDiaryEntry, NewDiaryEntry } from "../types";

const apiBaseUrl = "http://localhost:3001";

const getAll = async () => {
  const { data } = await axios.get<NonSensitiveDiaryEntry[]>(
    `${apiBaseUrl}/api/diaries`
  );
  return data;
};

const create = async (object: NewDiaryEntry) => {
  const { data } = await axios.post<NonSensitiveDiaryEntry>(
    `${apiBaseUrl}/api/diaries`, object
  );
  return data;
};

export default { getAll, create};
