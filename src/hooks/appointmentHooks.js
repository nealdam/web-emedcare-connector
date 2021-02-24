import useSWR from "swr";
import { GET_APPOINTMENT_URL } from "../constants/url"
import fetcher from "../fetcher";

export const useGetUnConfirmedAppointment = () => {
    const url = GET_APPOINTMENT_URL + "/count?is_confirmed=false" ;

    const { data, error } = useSWR(url, fetcher);

    return {
        data: data,
        isLoading: !error && !data,
        isError: error,
    }
}