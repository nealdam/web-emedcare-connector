import useSWR from "swr"
import { GET_USER_RELATED_PATIENT_URL } from "../constants/url"
import fetcher from "../fetcher";

export const useUserRelatedPatientByUserNamePhoneNumber = (user_name_phone_number) => {
    const url = GET_USER_RELATED_PATIENT_URL + "?user_name_phone_number=" + user_name_phone_number;

    const { data, error } = useSWR(url, fetcher);

    return {
        profiles: data,
        isLoading: !error && !data,
        isError: error
    }
}