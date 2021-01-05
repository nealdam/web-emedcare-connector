import { Fab, makeStyles } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import { useState } from "react";
import useSWR from "swr";
import CreateDoctorAccountDialog from "../../../src/components/CreateDoctorAccountDialog";
import DoctorTable from "../../../src/components/DoctorTable/DoctorTable";
import { successNotify } from "../../../src/constants/notistackVariants";
import { GET_ALL_DOCTORS_URL } from "../../../src/constants/url";
import fetcher from "../../../src/fetcher";
import { defaultPage } from "../../../src/hocs/defaultPage";
import { protectRoute } from "../../../src/hocs/protectRoute";
import { useTranslation } from "../../../src/i18n";

const useStyles = makeStyles((theme) => ({
  fab: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

function HumanResourcesDoctorPage() {
  const classes = useStyles();
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const { t } = useTranslation();
  const { data, error } = useSWR(GET_ALL_DOCTORS_URL, fetcher);

  const [isCreateDoctorDialogOpen, setIsCreateDoctorDialogOpen] = useState(
    false
  );

  const handleClickDoctorDetail = (doctorId) => {
    router.push(router.asPath + "/" + doctorId + "/profile");
  };

  const handleClickCreateDoctorAccount = (doctorId) => {
    setIsCreateDoctorDialogOpen(true);
  };

  const handleClickAddNewDoctor = () => {
    router.push(router.pathname + "/add");
  };

  const handleCreateDoctorAccount = () => {
    setIsCreateDoctorDialogOpen(false);
    enqueueSnackbar(t("Create account successful"), successNotify);
  };

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <div>
      <DoctorTable
        handleClickDoctorDetail={handleClickDoctorDetail}
        handleClickCreateDoctorAccount={handleClickCreateDoctorAccount}
        doctors={data}
      />
      <CreateDoctorAccountDialog
        open={isCreateDoctorDialogOpen}
        setOpen={setIsCreateDoctorDialogOpen}
        handleCreateAccount={handleCreateDoctorAccount}
      />
      <Fab
        className={classes.fab}
        color="primary"
        aria-label="Add new doctor"
        onClick={handleClickAddNewDoctor}
      >
        <Add />
      </Fab>
    </div>
  );
}

export default protectRoute(defaultPage(HumanResourcesDoctorPage));
