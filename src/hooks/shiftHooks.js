import { endOfWeek, startOfWeek } from "date-fns";
import { useState } from "react";
import useSWR from "swr";
import { GET_SHIFT_INFO_URL, GET_SHIFT_URL } from "../constants/url";
import useAuthContext from "../contexts/authContext";
import customFetcher from "./customFetcher";

export const useSingleShiftDetail = () => {
  const [shiftId, setShiftId] = useState();

  const { loggedInUser } = useAuthContext();

  const url = GET_SHIFT_URL + "/" + shiftId + "/detail";
  const { data, error } = useSWR(
    shiftId ? [url, loggedInUser.token] : null,
    customFetcher
  );

  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
    setShiftId: setShiftId,
  };
};

export const useShiftByDoctorId = (doctorId) => {
  const [startedAtMin, setStartedAtMin] = useState(
    startOfWeek(new Date(), { weekStartsOn: 1 })
  );
  const [startedAtMax, setStartedAtMax] = useState(
    endOfWeek(new Date(), { weekStartsOn: 1 })
  );

  const { loggedInUser } = useAuthContext();

  const url =
    GET_SHIFT_INFO_URL + "?offset=0" + "&limit=100" + "&doctor_id=" + doctorId + "&start_at_min=" + startedAtMin.toLocaleString() + "&start_at_max=" + startedAtMax.toLocaleString();
  const { data, error } = useSWR(
    doctorId ? [url, loggedInUser.token] : null,
    customFetcher
  );

  return {
    data: data && data.data,
    paging: data && data.paging,
    isLoading: !error && !data,
    isError: error,
    setStartedAtMin: setStartedAtMin,
    setStartedAtMax: setStartedAtMax,
  }
};
