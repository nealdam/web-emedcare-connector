import { useState } from "react";
import useSWR from "swr";
import { GET_NURSE_URL } from "../constants/url";
import customFetcher from './customFetcher'
import { DEFAULT_PAGE_SIZE } from '../constants/pagingConstant';

export const useNurse = () => {
    const [pageIndex, setPageIndex] = useState(1);
    const [pageLimit, setPageLimit] = useState(DEFAULT_PAGE_SIZE);

    const url = GET_NURSE_URL;
    const { data, error } = useSWR(url + "?offset=" + (pageIndex - 1) + "&limit=" + pageLimit);

    return {
        data: data,
        isLoading: !error && !data,
        isError: error,
        setPageIndex: setPageIndex,
        setPageLimit: setPageLimit
    }

}

export const useSingleNurseDetail = () => {
    const [nurseId, setNurseId] = useState();

    const url = GET_NURSE_URL + "/" + nurseId + "/detail";
    const { data, error } = useSWR(nurseId ? url : null, customFetcher);

    return {
        data: data,
        isLoading: !error && !data,
        isError: error,
        setNurseId: setNurseId
    }
}