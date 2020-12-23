import RoomDetail from "../../../../../src/components/RoomDetail"
import { defaultPage } from "../../../../../src/hocs/defaultPage"
import { protectRoute } from "../../../../../src/hocs/protectRoute"

function RoomManagerRoomDetailPage(props) {


  return (
    <div>
      <RoomDetail />
    </div>
  )
}

export default protectRoute(defaultPage(RoomManagerRoomDetailPage))