const host = process.env.serverUrl;

export const GET_ALL_NURSES_URL = host + "/nurses"
export const CREATE_NEW_NURSE_URL = host + "/nurses"

export const GET_DOCTOR_URL = host + "/doctors"
export const GET_DOCTOR_INFO_URL = host + "/doctors/information"
export const CREATE_NEW_DOCTOR_URL = host + "/doctors"
export const GET_ALL_DOCTORS_APPOINTMENTS = host + "/doctors/appointments"

export const GET_ALL_ROOMS_URL = host + "/rooms"
export const CREATE_NEW_ROOM_URL = host + "/rooms"

export const GET_SHIFT_URL = host + "/shifts/information"

export const GET_ALL_SPECIALTY_URL = host + "/specialties"

export const GET_PATIENT_URL = host + "/patients"

export const GET_APPOINTMENT_URL = host + "/appointments"

export const GET_USER_RELATED_PATIENT_URL = host + "/users/patients/relatedPatient"