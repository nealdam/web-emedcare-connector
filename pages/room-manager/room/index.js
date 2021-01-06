import { Fab, makeStyles } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import { useRouter } from "next/router";
import useSWR from "swr";
import RoomTable from "../../../src/components/RoomTable";
import { GET_ALL_ROOMS_URL } from "../../../src/constants/url";
import fetcher from "../../../src/fetcher";
import { defaultPage } from "../../../src/hocs/defaultPage";
import { protectRoute } from "../../../src/hocs/protectRoute";

const useStyles = makeStyles((theme) => ({
  fab: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

function RoomManagerRoomPage() {
  const classes = useStyles();
  const { data, error } = useSWR(GET_ALL_ROOMS_URL, fetcher);

  const router = useRouter();

  const handleClickRoomInfo = (roomId) => {
    router.push(router.asPath + "/" + roomId + "/detail");
  };

  const handleClickAddNewRoom = () => {
    router.push(router.pathname + "/add");
  }

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <div>
      <RoomTable handleClickRoomInfo={handleClickRoomInfo} rooms={data} />
      <Fab className={classes.fab} color="primary" aria-label="Add new nurse" onClick={handleClickAddNewRoom}>
        <Add />
      </Fab>
    </div>
  );
}

export default protectRoute(defaultPage(RoomManagerRoomPage));
