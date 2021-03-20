import { useState } from "react";
import useSWR from "swr";
import { DEFAULT_PAGE_SIZE } from "../constants/pagingConstant";
import { GET_ROOM_INFORMATION_URL, GET_ROOM_URL } from "../constants/url";
import useAuthContext from "../contexts/authContext";
import customFetcher from './customFetcher';

export const useRoom = () => {
    const [offset, setOffset] = useState(0);
    const [limit, setLimit] = useState(DEFAULT_PAGE_SIZE);

    const { loggedInUser } = useAuthContext();

    const url = GET_ROOM_URL + "?offset=" + offset + "&limit=" + limit;
    const { data, error } = useSWR([url, loggedInUser.token], customFetcher);

    return {
        data: data && data.data,
        paging: data && data.paging,
        isLoading: !error && !data,
        isError: error,
        setOffset: setOffset,
        setLimit: setLimit,
    }
}

export const useRoomInformation = () => {
    const {loggedInUser} = useAuthContext();

    const url = GET_ROOM_INFORMATION_URL;
    const { data, error } = useSWR([url, loggedInUser.token], customFetcher);

    return {
        data: data && data.data,
        isLoading: !error && !data,
        isError: error
    }
}

export const useSingleRoomDetail = () => {
    const [roomId, setRoomId] = useState();

    const {loggedInUser} = useAuthContext();

    const url = GET_ROOM_URL + "/" + roomId + "/detail";
    const { data, error } = useSWR(roomId ? [url, loggedInUser.token] : null, customFetcher);

    return {
        data: data,
        isLoading: !error && !data,
        isError: error,
        setRoomId: setRoomId
    }
}