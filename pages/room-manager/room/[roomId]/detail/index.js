import { useRouter } from "next/router"
import { useEffect } from "react";
import RoomDetail from "../../../../../src/components/RoomDetail"
import { defaultPage } from "../../../../../src/hocs/defaultPage"
import { protectRoute } from "../../../../../src/hocs/protectRoute"
import { useSingleRoomDetail } from "../../../../../src/hooks/roomHooks";

function RoomManagerRoomDetailPage(props) {

  const router = useRouter();
  const { roomId } = router.query;

  const { data, isLoading, isError, setRoomId } = useSingleRoomDetail();

  useEffect(() => {
    setRoomId(roomId);
  }, [roomId]);

  return (
      <RoomDetail room={data} isLoading={isLoading} isError={isError} />
  )
}

export default protectRoute(defaultPage(RoomManagerRoomDetailPage))