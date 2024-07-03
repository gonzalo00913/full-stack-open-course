
export interface DiagnosesEntry {
  code: string;
  name: string;
  latin?: string;
}

export interface Entry {
}

export type NonSensitivePatientEntry = Omit<PatientEntry, "ssn">

export interface PatientEntry {
  id: string;
  name: string;
  occupation: string;
  gender: string;
  ssn: string;
  dateOfBirth: string;
  entries: Entry[]
}
