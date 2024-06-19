export interface DiagnosesEntry {
  code: string;
  name: string;
  latin?: string;
}

export type NonSensitivePatientEntry = Omit<PatientEntry, "ssn">

export interface PatientEntry {
  id: string;
  name: string;
  dateOfBirth: string;
  ssn: string;
  gender: string;
  occupation: string;
}
