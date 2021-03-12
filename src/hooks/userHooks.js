import { useState } from "react";
import useSWR from "swr"
import { GET_USER_RELATED_PATIENT_URL } from "../constants/url"

export const useUserRelatedPatientByUserNamePhoneNumber = () => {
    const [userNamePhoneNumber, setUserNamePhoneNumber] = useState("");

    const url = GET_USER_RELATED_PATIENT_URL + "?user_name_phone_number=" + userNamePhoneNumber;
    const { data, error } = useSWR(url, fetcher);

    return {
        profiles: data,
        isLoading: !error && !data,
        isError: error,
        setUserNamePhoneNumber: setUserNamePhoneNumber,
    }
}