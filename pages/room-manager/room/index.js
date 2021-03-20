import { Fab, makeStyles } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import { useRouter } from "next/router";
import useSWR from "swr";
import RoomTable from "../../../src/components/RoomTable";
import { GET_ROOM_URL } from "../../../src/constants/url";
import { defaultPage } from "../../../src/hocs/defaultPage";
import { protectRoute } from "../../../src/hocs/protectRoute";
import { useRoom, useRoomInformation } from "../../../src/hooks/roomHooks";

const useStyles = makeStyles((theme) => ({
  fab: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

function RoomManagerRoomPage() {
  const classes = useStyles();
  const { data, paging, isLoading, isError, setOffset, setLimit } = useRoom();

  const router = useRouter();

  const handleClickRoomInfo = (roomId) => {
    router.push(router.asPath + "/" + roomId + "/detail");
  };

  const handleClickAddNewRoom = () => {
    router.push(router.pathname + "/add");
  };

  return (
    <div>
      <RoomTable
        handleClickRoomInfo={handleClickRoomInfo}
        rooms={data}
        paging={paging}
        isLoading={isLoading}
        isError={isError}
        setOffset={setOffset}
        setLimit={setLimit}
      />
      {/* <Fab
        className={classes.fab}
        color="primary"
        aria-label="Add new nurse"
        onClick={handleClickAddNewRoom}
      >
        <Add />
      </Fab> */}
    </div>
  );
}

export default protectRoute(defaultPage(RoomManagerRoomPage));
