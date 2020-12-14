import { useRouter } from "next/router";
import RoomTable from "../../../src/components/RoomTable"
import { defaultPage } from "../../../src/hocs/defaultPage"

function RoomManagerRoomPage() {

  const router = useRouter();

  const handleClickRoomInfo = (roomId) => {
    router.push(router.asPath + "/" + roomId + "/detail")
  }

  return (
    <div>
      <RoomTable handleClickRoomInfo={handleClickRoomInfo} />
    </div>
  )
}

export default defaultPage(RoomManagerRoomPage);