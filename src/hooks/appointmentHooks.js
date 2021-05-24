import { addDays, addHours, subMilliseconds } from "date-fns";
import { useState } from "react";
import useSWR from "swr";
import { DEFAULT_PAGE_SIZE } from "../constants/pagingConstant";
import { GET_APPOINTMENT_URL } from "../constants/url";
import useAuthContext from "../contexts/authContext";
import customFetcher from "./customFetcher";

export const useAppointmentInfoByPatient = (patientId, offset, limit) => {
  const { loggedInUser } = useAuthContext();

  const url =
    GET_APPOINTMENT_URL + "/information" +
    "?offset=" + offset +
    "&limit=" + limit +
    "&patientId=" + patientId;

    const { data, error } = useSWR(patientId ? [url, loggedInUser.token] : null, customFetcher);

    return {
      data: data && data.data,
      paging: data && data.paging,
      isLoading: !error && !data,
      isError: error
    }
}

export const useAppointmentByDoctorOnDate = (doctorId, selectedDate) => {
  const { loggedInUser } = useAuthContext();

  const url =
    GET_APPOINTMENT_URL + "/information" +
    "?offset=0" +
    "&limit=100" +
    "&doctorId=" + doctorId +
    "&is_confirmed=true" + 
    "&start_at_min=" + selectedDate.toISOString() +
    "&start_at_max=" +  subMilliseconds(addHours(selectedDate, 1), 1).toISOString();

  const { data, error } = useSWR(doctorId ? [url, loggedInUser.token] : null, customFetcher);

  return {
    data: data && data.data,
    isLoading: !error && !data,
    isError: error
  }
};

export const useUnconfirmedAppointment = () => {
  console.debug("--- Get UnConfirmed Appointment ---");

  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(DEFAULT_PAGE_SIZE);

  const { loggedInUser } = useAuthContext();

  const url =
    GET_APPOINTMENT_URL +
    "/information" +
    "?offset=" +
    offset +
    "&limit=" +
    limit +
    "&status_id=1";
  const { data, error } = useSWR([url, loggedInUser.token], customFetcher);

  return {
    data: data && data.data,
    paging: data && data.paging,
    isLoading: !error && !data,
    isError: error,
    setOffset: setOffset,
    setLimit: setLimit,
  };
};

export const useGetUnConfirmedAppointmentCount = () => {
  console.debug("--- Get UnConfirmed Appointment Count ---");
  const url = GET_APPOINTMENT_URL + "/count?status_id=1";

  const { loggedInUser } = useAuthContext();

  const { data, error } = useSWR([url, loggedInUser.token], customFetcher);

  return {
    data: data && data.data,
    isLoading: !error && !data,
    isError: error,
  };
};

export const useSingleAppointmentDetail = () => {
  const [appointmentId, setAppointmentId] = useState();

  const { loggedInUser } = useAuthContext();

  const url = GET_APPOINTMENT_URL + "/" + appointmentId + "/detail";
  const { data, error } = useSWR(
    appointmentId ? [url, loggedInUser.token] : null,
    customFetcher
  );

  return {
    data: data && data.data,
    isLoading: !error && !data,
    isError: error,
    setAppointmentId: setAppointmentId,
  };
};

export const useSingleAppointmentDetailById = (appointmentId) => {
  const { loggedInUser } = useAuthContext();

  const url = GET_APPOINTMENT_URL + "/" + appointmentId + "/detail";
  const { data, error } = useSWR(
    appointmentId ? [url, loggedInUser.token] : null,
    customFetcher
  );

  return {
    data: data && data.data,
    isLoading: !error && !data,
    isError: error
  };
};