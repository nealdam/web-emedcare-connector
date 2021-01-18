import RoomQueueDetailTable from "../../../../src/components/RoomQueueDetailTable"
import { protectRoute } from "../../../../src/hocs/protectRoute"

function HelperRoomQueueDetailPage() {


  return (
    <div>
      <RoomQueueDetailTable />
    </div>
  )
}

export default protectRoute(HelperRoomQueueDetailPage)