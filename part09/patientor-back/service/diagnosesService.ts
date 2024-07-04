import diagnosesData from "../data/diagnoses"
import patientsData from "../data/patients"

//import { v1 as uuid } from 'uuid'

import { DiagnosesEntry, PatientEntry, NonSensitivePatientEntry} from "../src/types"

//const id = uuid()

const diagnoses: DiagnosesEntry[] = diagnosesData as DiagnosesEntry[]
const patient: PatientEntry[] = patientsData as PatientEntry[]

const getDiagnoses = ():DiagnosesEntry[] => {
    return diagnoses
}

const getPatients = (): NonSensitivePatientEntry[] => {
  return patient.map(({id, name, dateOfBirth, gender, occupation, entries}) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
    entries
  }))
}

const findById = (id: string): PatientEntry | undefined => {
  return patient.find(patient => patient.id === id);
};

/* const addPatient = (name: string, dateOfBirth: string, ssn: string, gender: string, occupation: string): PatientEntry => {
  const newPatientEntry = {
    id,
    name, 
    dateOfBirth, 
    ssn, 
    gender, 
    occupation
  }

  patient.push(newPatientEntry)
  return newPatientEntry
} */

export default {
  getDiagnoses,
  getPatients,
  findById
  //addPatient
}