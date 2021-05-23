import { defaultPage } from "../../../../../../src/hocs/defaultPage";
import { protectRoute } from "../../../../../../src/hocs/protectRoute";

function RoomDetailEditPage(props) {
  return <div>Room detail edit page</div>;
}

export default protectRoute(defaultPage(RoomDetailEditPage));
