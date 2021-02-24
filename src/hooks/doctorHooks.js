import { useState } from "react";
import useSWR from "swr";
import { GET_DOCTOR_URL, GET_DOCTOR_INFO_URL } from "../constants/url";
import fetcher from "../fetcher";

export const useDoctor = () => {
    const url = GET_DOCTOR_INFO_URL;
    const { data, error } = useSWR(url, fetcher);

    return {
        data: data, 
        isLoading: !error && !data,
        isError: error
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