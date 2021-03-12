import { useState } from "react";
import useSWR from "swr";
import { GET_ROOM_INFORMATION_URL, GET_ROOM_URL } from "../constants/url";

export const useRoomInformation = () => {
    const url = GET_ROOM_INFORMATION_URL;
    const { data, error } = useSWR(url, fetcher);

    return {
        data: data,
        isLoading: !error && !data,
        isError: error
    }
}

export const useSingleRoomDetail = () => {
    const [roomId, setRoomId] = useState();

    const url = GET_ROOM_URL + "/" + roomId + "/detail";
    const { data, error } = useSWR(roomId ? url : null, fetcher);

    return {
        data: data,
        isLoading: !error && !data,
        isError: error,
        setRoomId: setRoomId
    }
}