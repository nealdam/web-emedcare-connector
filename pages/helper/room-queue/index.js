import RoomQueueTable from "../../../src/components/RoomQueueTable";
import { defaultPage } from "../../../src/hocs/defaultPage";
import { protectRoute } from "../../../src/hocs/protectRoute";
import { useRoom } from "../../../src/hooks/roomHooks";

function HelperRoomQueuePage() {
  const { data, paging, isLoading, isError, setOffset, setLimit } = useRoom();

  return (
    <RoomQueueTable
      rooms={data}
      paging={paging}
      isLoading={isLoading}
      isError={isError}
      setOffset={setOffset}
      setLimit={setLimit}
    />
  );
}

export default protectRoute(defaultPage(HelperRoomQueuePage));
