import { useState } from "react";
import useSWR from "swr";
import { DEFAULT_PAGE_SIZE } from "../constants/pagingConstant";
import { GET_DOCTOR_URL, GET_DOCTOR_INFO_URL } from "../constants/url";
import customFetcher from "./customFetcher";

export const useDoctorInformation = () => {
    const [offset, setOffset] = useState(0);
    const [limit, setLimit] = useState(DEFAULT_PAGE_SIZE);

    const url = GET_DOCTOR_INFO_URL;
    const { data, error } = useSWR(url + "?offset=" + offset + "&limit=" + limit, customFetcher);

    return {
        data: data, 
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

    const url = GET_DOCTOR_URL + 
        "/appointments" +
        "?offset=" + (pageIndex - 1) +
        "&limit=" + pageSize +
        "&date=" + selectedDate.toISOString();
    const { data, error } = useSWR(url, customFetcher);

    return {
        data: data && data.data,
        isLoading: !error && !data,
        isError: error,
        paging: data && data.paging,
        setPageIndex: setPageIndex,
        setPageSize: setPageSize,
        setSelectedDate: setSelectedDate
    }
}

export const useSingleDoctorDetail = () => {
    const [doctorId, setDoctorId] = useState();

    const url = GET_DOCTOR_URL + "/" + doctorId + "/detail";
    const { data, error } = useSWR(doctorId ? url : null, customFetcher);

    return {
        data: data,
        isLoading: !error && !data,
        isError: error, 
        setDoctorId: setDoctorId
    }
}