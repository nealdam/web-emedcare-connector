import useSWR from "swr";
import { defaultPage } from "../../src/hocs/defaultPage";
import { protectRoute } from "../../src/hocs/protectRoute";
import { GET_ALL_ROOMS_URL } from "../../src/constants/url";

function RoomManagerPage() {
  return <div>Room Manager Page</div>;
}

export default protectRoute(defaultPage(RoomManagerPage));
