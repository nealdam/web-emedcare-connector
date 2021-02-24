import useSWR from "swr";
import { GET_PATIENT_URL } from "../constants/url";
import fetcher from "../fetcher";

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