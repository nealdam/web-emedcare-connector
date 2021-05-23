import { Fab, makeStyles } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import { useRouter } from "next/router";
import useSWR from "swr";
import NurseTable from "../../../src/components/NurseTable";
import { GET_NURSE_URL } from "../../../src/constants/url";
import { defaultPage } from "../../../src/hocs/defaultPage";
import { protectRoute } from "../../../src/hocs/protectRoute";
import { useNurse } from "../../../src/hooks/nurseHooks";

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

  const { data, isLoading, isError, setOffset, setLimit } = useNurse();

  const handleClickNurseProfile = (nurseId) => {
    route.push(route.asPath + "/" + nurseId + "/profile");
  };

  // const handleClickAddNewNurse = () => {
  //   route.push(route.asPath + "/add");
  // }

  return (
    <div>
      <NurseTable
        handleClickNurseProfile={handleClickNurseProfile}
        nurses={data && data.data}
        paging={data && data.paging}
        isLoading={isLoading}
        isError={isError}
        setOffset={setOffset}
        setLimit={setLimit}
      />
      {/* <Fab className={classes.fab} color="primary" aria-label="Add new nurse" onClick={handleClickAddNewNurse}>
        <Add />
      </Fab> */}
    </div>
  );
}

export default protectRoute(defaultPage(HumanResourcesNursePage));
