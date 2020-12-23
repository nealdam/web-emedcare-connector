import { defaultPage } from "../../src/hocs/defaultPage"
import { protectRoute } from "../../src/hocs/protectRoute";

function RoomManagerPage() {

  return (
    <div>Room Manager Page</div>
  )
}

export default protectRoute(defaultPage(RoomManagerPage));