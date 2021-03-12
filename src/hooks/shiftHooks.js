import { useState } from "react";
import useSWR from "swr";
import { GET_SHIFT_URL } from "../constants/url";

export const useSingleShiftDetail = () => {
    const [shiftId, setShiftId] = useState();

    const url = GET_SHIFT_URL + "/" + shiftId + "/detail";
    const { data, error } = useSWR(shiftId ? url : null, fetcher);

    return {
        data: data,
        isLoading: !error && !data,
        isError: error,
        setShiftId: setShiftId
    }
}