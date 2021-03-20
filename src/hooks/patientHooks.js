import { useState } from "react";
import useSWR from "swr";
import { DEFAULT_PAGE_SIZE } from "../constants/pagingConstant";
import { GET_PATIENT_URL } from "../constants/url";
import useAuthContext from "../contexts/authContext";
import customFetcher from "./customFetcher";

export const usePatient = () => {
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(DEFAULT_PAGE_SIZE);

  const { loggedInUser } = useAuthContext();

  const url = GET_PATIENT_URL + "/base" + "?offset=" + offset + "&limit=" + limit;
  const { data, error } = useSWR([url, loggedInUser.token], customFetcher);

  return {
    data: data && data.data,
    paging: data && data.paging,
    isLoading: !error && !data,
    isError: error,
    setOffset: setOffset,
    setLimit: setLimit

  }
}

export const usePatientDetail = (patientId) => {
  const url = GET_PATIENT_URL + "/" + patientId + "/detail";

  const { loggedInUser } = useAuthContext();

  const { data, error } = useSWR([url, loggedInUser.token], customFetcher);

  return {
    data: data && data.data,
    isLoading: !error && !data,
    isError: error,
  };
};

export const usePatientAppointment = (patientId) => {
  const url = GET_PATIENT_URL + "/" + patientId + "/appointment";

  const { loggedInUser } = useAuthContext();

  const { data, error } = useSWR([url, loggedInUser.token], customFetcher);

  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
};
