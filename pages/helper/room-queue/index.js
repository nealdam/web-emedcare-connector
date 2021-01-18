import RoomQueueTable from "../../../src/components/RoomQueueTable"
import { defaultPage } from "../../../src/hocs/defaultPage"
import { protectRoute } from "../../../src/hocs/protectRoute"

function HelperRoomQueuePage () {


  return (
    <div>
      <RoomQueueTable />
    </div>
  )
}

export default protectRoute(defaultPage(HelperRoomQueuePage))