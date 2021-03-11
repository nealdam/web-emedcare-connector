import { useState } from "react";
import useSWR from "swr";
import { DEFAULT_PAGE_SIZE } from "../constants/PagingConstant";
import { GET_DOCTOR_URL, GET_DOCTOR_INFO_URL } from "../constants/url";
import fetcher from "../fetcher";
import pagingFetcher from './pagingFetcher'

export const useDoctor = () => {
    const url = GET_DOCTOR_INFO_URL;
    const { data, error } = useSWR(url, fetcher);

    return {
        data: data, 
        isLoading: !error && !data,
        isError: error
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
    const { data, error } = useSWR(url, pagingFetcher);

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
    const { data, error } = useSWR(doctorId ? url : null, fetcher);

    return {
        data: data,
        isLoading: !error && !data,
        isError: error, 
        setDoctorId: setDoctorId
    }
}