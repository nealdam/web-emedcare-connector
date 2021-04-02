import { useRouter } from "next/router";
import { Fragment } from "react";
import { useEffect } from "react";
import RoomAction from "../../../../../src/components/RoomAction";
import RoomDetail from "../../../../../src/components/RoomDetail";
import { defaultPage } from "../../../../../src/hocs/defaultPage";
import { protectRoute } from "../../../../../src/hocs/protectRoute";
import { useSingleRoomDetail } from "../../../../../src/hooks/roomHooks";

function RoomManagerRoomDetailPage(props) {
  const router = useRouter();
  const { roomId } = router.query;

  const { data, isLoading, isError, setRoomId } = useSingleRoomDetail();

  useEffect(() => {
    setRoomId(roomId);
  }, [roomId]);

  const handleClickEdit = () => {
    router.push(router.asPath + "/edit");
  }

  return (
    <Fragment>
      <RoomAction handleClickEdit={handleClickEdit} />
      <RoomDetail room={data} isLoading={isLoading} isError={isError} />
    </Fragment>
  );
}

export default protectRoute(defaultPage(RoomManagerRoomDetailPage));
