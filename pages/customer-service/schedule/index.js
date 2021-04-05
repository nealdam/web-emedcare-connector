import { Fab, makeStyles } from "@material-ui/core";
import BackToTopIcon from "@material-ui/icons/ArrowUpward";
import { useState } from "react";
import useSWR from "swr";
import Schedule from "../../../src/components/Schedule";
import { GET_ALL_DOCTORS_APPOINTMENTS } from "../../../src/constants/url";
import { defaultPage } from "../../../src/hocs/defaultPage";
import { protectRoute } from "../../../src/hocs/protectRoute";
import {
  useDoctor,
  useDoctorAppointment,
} from "../../../src/hooks/doctorHooks";
import { useTranslation } from "../../../src/i18n";

const useStyle = makeStyles((theme) => ({
  fab: {
    position: "fixed",
    bottom: theme.spacing(6),
    right: theme.spacing(2),
  },
}));

function CustomerServiceSchedulePage() {
  const { t } = useTranslation();
  const classes = useStyle();

  const { data, paging, isLoading, isError, setOffset, setLimit } = useDoctor();

  const handleClickScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <Schedule
        isLoading={isLoading}
        isError={isError}
        doctors={data}
        paging={paging}
        setOffset={setOffset}
        setLimit={setLimit}
      />
      <Fab
        color="primary"
        aria-label="Back to top"
        className={classes.fab}
        onClick={handleClickScrollToTop}
      >
        <BackToTopIcon />
      </Fab>
    </div>
  );
}

export default protectRoute(defaultPage(CustomerServiceSchedulePage));
