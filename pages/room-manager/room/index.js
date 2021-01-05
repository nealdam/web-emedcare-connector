import { useRouter } from "next/router";
import useSWR from "swr";
import RoomTable from "../../../src/components/RoomTable";
import { GET_ALL_ROOMS_URL } from "../../../src/constants/url";
import fetcher from "../../../src/fetcher";
import { defaultPage } from "../../../src/hocs/defaultPage";
import { protectRoute } from "../../../src/hocs/protectRoute";

function RoomManagerRoomPage() {
  const { data, error } = useSWR(GET_ALL_ROOMS_URL, fetcher);

  const router = useRouter();

  const handleClickRoomInfo = (roomId) => {
    router.push(router.asPath + "/" + roomId + "/detail");
  };

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <div>
      <RoomTable handleClickRoomInfo={handleClickRoomInfo} rooms={data} />
    </div>
  );
}

export default protectRoute(defaultPage(RoomManagerRoomPage));
