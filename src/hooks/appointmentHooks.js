import { useState } from "react";
import useSWR from "swr";
import { GET_APPOINTMENT_URL } from "../constants/url"
import customFetcher from './customFetcher'

export const useGetUnConfirmedAppointmentCount = () => {
    const url = GET_APPOINTMENT_URL + "/count?is_confirmed=false" ;

    const { data, error } = useSWR(url, customFetcher);

    return {
        data: data,
        isLoading: !error && !data,
        isError: error,
    }
}

export const useSingleAppointmentDetail = () => {
    const [appointmentId, setAppointmentId] = useState();

    const url = GET_APPOINTMENT_URL + "/" + appointmentId + "/detail"
    const { data, error } = useSWR(appointmentId ? url : null, fetcher);

    return {
        data: data,
        isLoading: !error && !data,
        isError: error,
        setAppointmentId: setAppointmentId
    }
}