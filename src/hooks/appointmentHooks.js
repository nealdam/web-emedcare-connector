import { useState } from "react";
import useSWR from "swr";
import { DEFAULT_PAGE_SIZE } from "../constants/pagingConstant";
import { GET_APPOINTMENT_URL } from "../constants/url"
import useAuthContext from "../contexts/authContext";
import customFetcher from './customFetcher'

export const useUnconfirmedAppointment = () => {
    console.debug("--- Get UnConfirmed Appointment ---");

    const [offset, setOffset] = useState(0);
    const [limit, setLimit] = useState(DEFAULT_PAGE_SIZE);

    const {loggedInUser} = useAuthContext();

    const url = GET_APPOINTMENT_URL + "/information" + "?offset=" + offset + "&limit=" + limit + "&is_confirmed=false" ;
    const { data, error } = useSWR([url, loggedInUser.token], customFetcher);

    return {
        data: data && data.data,
        paging: data && data.paging,
        isLoading: !error && !data,
        isError: error,
        setOffset: setOffset,
        setLimit: setLimit,
    }
}

export const useGetUnConfirmedAppointmentCount = () => {
    console.debug("--- Get UnConfirmed Appointment Count ---");
    const url = GET_APPOINTMENT_URL + "/count?is_confirmed=false" ;

    const {loggedInUser} = useAuthContext();

    const { data, error } = useSWR([url, loggedInUser.token], customFetcher);

    return {
        data: data && data.data,
        isLoading: !error && !data,
        isError: error,
    }
}

export const useSingleAppointmentDetail = () => {
    const [appointmentId, setAppointmentId] = useState();

    const {loggedInUser} = useAuthContext();

    const url = GET_APPOINTMENT_URL + "/" + appointmentId + "/detail"
    const { data, error } = useSWR(appointmentId ? [url, loggedInUser.token] : null, fetcher);

    return {
        data: data && data.data,
        isLoading: !error && !data,
        isError: error,
        setAppointmentId: setAppointmentId
    }
}