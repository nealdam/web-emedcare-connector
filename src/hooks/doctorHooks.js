import { useState } from "react";
import useSWR from "swr";
import { DEFAULT_PAGE_SIZE } from "../constants/pagingConstant";
import { GET_DOCTOR_URL, GET_DOCTOR_INFO_URL } from "../constants/url";
import useAuthContext from "../contexts/authContext";
import customFetcher from "./customFetcher";

export const useDoctor = () => {
    const [offset, setOffset] = useState(0);
    const [limit, setLimit] = useState(DEFAULT_PAGE_SIZE);

    const { loggedInUser } = useAuthContext();

    const url = GET_DOCTOR_URL + "?offset=" + offset + "&limit=" + limit;
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

export const useDoctorInformation = () => {
    const [offset, setOffset] = useState(0);
    const [limit, setLimit] = useState(DEFAULT_PAGE_SIZE);

    const {loggedInUser} = useAuthContext();

    const url = GET_DOCTOR_INFO_URL + "?offset=" + offset + "&limit=" + limit;
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

export const useDoctorAppointment = () => {
    const [pageIndex, setPageIndex] = useState(1);
    const [pageSize, setPageSize] = useState(DEFAULT_PAGE_SIZE);
    const [selectedDate, setSelectedDate] = useState(new Date());

    const {loggedInUser} = useAuthContext();

    const url = GET_DOCTOR_URL + 
        "/appointments" +
        "?offset=" + (pageIndex - 1) +
        "&limit=" + pageSize +
        "&date=" + selectedDate.toISOString();
    const { data, error } = useSWR([url, loggedInUser.token], customFetcher);

    return {
        data: data && data.data,
        paging: data && data.paging,
        isLoading: !error && !data,
        isError: error,
        setPageIndex: setPageIndex,
        setPageSize: setPageSize,
        setSelectedDate: setSelectedDate
    }
}

export const useSingleDoctorDetail = () => {
    const [doctorId, setDoctorId] = useState();

    const {loggedInUser} = useAuthContext();

    const url = GET_DOCTOR_URL + "/" + doctorId + "/detail";
    const { data, error } = useSWR(doctorId ? [url, loggedInUser.token] : null, customFetcher);

    return {
        data: data,
        isLoading: !error && !data,
        isError: error, 
        setDoctorId: setDoctorId
    }
}