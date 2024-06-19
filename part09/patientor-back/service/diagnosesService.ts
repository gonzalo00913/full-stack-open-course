import diagnosesData from "../data/diagnoses"
import patientsData from "../data/patients"

import { DiagnosesEntry, PatientEntry, NonSensitivePatientEntry} from "../src/types"

const diagnoses: DiagnosesEntry[] = diagnosesData as DiagnosesEntry[]
const patient: PatientEntry[] = patientsData as PatientEntry[]

const getDiagnoses = (): DiagnosesEntry[] => {
    return diagnoses
}

const getPatients = (): NonSensitivePatientEntry[] => {
  return patient.map(({id, name, dateOfBirth, gender, occupation}) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
  }))
}



export default {
  getDiagnoses,
  getPatients
}