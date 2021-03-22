import { useRouter } from "next/router";
import { useEffect } from "react";
import RoomQueueDetailTable from "../../../../src/components/RoomQueueDetailTable";
import { protectRoute } from "../../../../src/hocs/protectRoute";
import { useSingleRoomDetail, useSingleRoomWaitingQueue } from "../../../../src/hooks/roomHooks";

function HelperRoomQueueDetailPage() {
  const router = useRouter();
  const { roomId } = router.query;
  const { data: roomQueue, isLoading: isRoomQueueLoading, isError: isRoomQueueError, setRoomId: setRoomQueueId } = useSingleRoomWaitingQueue();
  const { data: roomInfo, isLoading: isRoomLoading, isError: isRoomError, setRoomId: setRoomInfoId} = useSingleRoomDetail();



  useEffect(() => {
    setRoomQueueId(roomId);
    setRoomInfoId(roomId);
  }, [roomId]);

  return (
    <RoomQueueDetailTable
      room={roomInfo}
      patients={roomQueue}
      isLoading={isRoomQueueLoading || isRoomLoading}
      isError={isRoomQueueError || isRoomError}
    />
  );
}

export default protectRoute(HelperRoomQueueDetailPage);
