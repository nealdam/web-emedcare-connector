import { Fab, makeStyles } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import { useRouter } from "next/router";
import useSWR from "swr";
import ShiftTable from "../../../src/components/ShiftTable";
import { GET_ALL_SHIFT_URL } from "../../../src/constants/url";
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

function SchedulerShiftPage() {
  const classes = useStyles();
  const route = useRouter();
  
  const { data, error } = useSWR(GET_ALL_SHIFT_URL, fetcher);

  const handleClickAddNewShift = () => {

  }

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <div>
      <ShiftTable shifts={data} />
      <Fab
        className={classes.fab}
        color="primary"
        aria-label="Add new shift"
        onClick={handleClickAddNewShift}
      >
        <Add />
      </Fab>
    </div>
  );
}

export default protectRoute(defaultPage(SchedulerShiftPage));
