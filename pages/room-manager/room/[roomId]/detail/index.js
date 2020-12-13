import RoomDetail from "../../../../../src/components/RoomDetail"
import { defaultPage } from "../../../../../src/hocs/defaultPage"

function RoomManagerRoomDetailPage(props) {


  return (
    <div>
      <RoomDetail />
    </div>
  )
}

export default defaultPage(RoomManagerRoomDetailPage)