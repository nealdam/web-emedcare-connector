import useSWR from "swr";
import { GET_PATIENT_URL } from "../constants/url";

// export const usePatient = () => {
//   const url = GET_PATIENT_URL + 
// }

export const usePatientDetail = (patientId) => {
  const url = GET_PATIENT_URL + "/" + patientId + "/detail";

  const { data, error } = useSWR(url, fetcher);

  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export const usePatientAppointment = (patientId) => {
  const url = GET_PATIENT_URL + "/" + patientId + "/appointment";

  const { data, error } = useSWR(url, fetcher);

  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  }
}