import axios from "axios";
import { NonSensitiveDiaryEntry } from "../types";

const apiBaseUrl = "http://localhost:3001";

const getAll = async () => {
  const { data } = await axios.get<NonSensitiveDiaryEntry[]>(
    `${apiBaseUrl}/api/diaries`
  );
  return data
};

export default {getAll}