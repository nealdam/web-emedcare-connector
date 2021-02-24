import useSWR from "swr";
import { GET_DOCTOR_INFO_URL } from "../constants/url";
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