import { Fab, makeStyles } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import { useRouter } from "next/router";
import useSWR from "swr";
import NurseTable from "../../../src/components/NurseTable";
import { GET_NURSE_URL } from "../../../src/constants/url";
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

function HumanResourcesNursePage() {
  const classes = useStyles();
  const route = useRouter();
  const { data, error } = useSWR(GET_NURSE_URL, fetcher);

  const handleClickNurseProfile = (nurseId) => {
    route.push(route.asPath + "/" + nurseId + "/profile");
  };

  const handleClickAddNewNurse = () => {
    route.push(route.asPath + "/add");
  }

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <div>
      <NurseTable
        handleClickNurseProfile={handleClickNurseProfile}
        nurses={data}
      />
      <Fab className={classes.fab} color="primary" aria-label="Add new nurse" onClick={handleClickAddNewNurse}>
        <Add />
      </Fab>
    </div>
  );
}

export default protectRoute(defaultPage(HumanResourcesNursePage));
