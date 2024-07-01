export type Weather = "sunny" | "rainy" | "cloudy" | "windy" | "stormy";

export type Visibility = "great" | "good" | "ok" | "poor";

export type NonSensitiveDiaryEntry = Omit<Diary, "comment">;

export type NewDiaryEntry = Omit<Diary, "id">;


export interface Diary {
    id: number;
    date: string;
    weather: Weather;
    visibility: Visibility;
    comment: string;
  }
  