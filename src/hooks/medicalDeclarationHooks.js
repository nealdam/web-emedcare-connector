import { useState } from "react";
import useSWR from "swr";
import { DEFAULT_PAGE_SIZE } from "../constants/pagingConstant";
import { GET_MEDICAL_DECLARATION } from "../constants/url";
import useAuthContext from "../contexts/authContext";
import customFetcher from './customFetcher'


export const useMedicalDeclaration = () => {
    const [offset, setOffset] = useState(0);
    const [limit, setLimit] = useState(DEFAULT_PAGE_SIZE);

    const { loggedInUser } = useAuthContext();

    const url = GET_MEDICAL_DECLARATION;
    const { data, error } = useSWR([url + "?offset=" + offset + "&limit=" + limit, loggedInUser.token], customFetcher);

    return {
        data: data && data.data,
        paging: data && data.paging,
        isLoading: !error && !data,
        isError: error,
        setOffset: setOffset,
        setLimit: setLimit
    }
}