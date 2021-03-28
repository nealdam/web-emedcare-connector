import { useState } from "react";
import useSWR from "swr"
import { GET_USER_RELATED_PATIENT_URL, GET_USER_URL } from "../constants/url"
import useAuthContext from "../contexts/authContext";
import customFetcher from './customFetcher';

export const useSingleUser = (userId) => {
    const { loggedInUser } = useAuthContext();

    const url = 
        GET_USER_URL + "/single" + "?userId=" + userId;

    const { data, error } = useSWR(userId ? [url, loggedInUser.token] : null, customFetcher);

    return {
        data: data && data.data,
        isLoading: !error && !data,
        isError: error,
    }
}

export const useUserRelatedPatientByUserNamePhoneNumber = () => {
    const [userNamePhoneNumber, setUserNamePhoneNumber] = useState("");

    const {loggedInUser} = useAuthContext();

    const url = GET_USER_RELATED_PATIENT_URL + "?user_name_phone_number=" + userNamePhoneNumber;
    const { data, error } = useSWR([url, loggedInUser.token], customFetcher);

    return {
        profiles: data,
        isLoading: !error && !data,
        isError: error,
        setUserNamePhoneNumber: setUserNamePhoneNumber,
    }
}