import { useState } from "react";
import useSWR from "swr";
import { GET_NURSE_URL } from "../constants/url";
import fetcher from "../fetcher";

export const useSingleNurseDetail = () => {
    const [nurseId, setNurseId] = useState();

    const url = GET_NURSE_URL + "/" + nurseId + "/detail";
    const { data, error } = useSWR(nurseId ? url : null, fetcher);

    return {
        data: data,
        isLoading: !error && !data,
        isError: error,
        setNurseId: setNurseId
    }
}