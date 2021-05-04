import { Fab, makeStyles } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import { endOfWeek, startOfWeek } from "date-fns";
import { useRouter } from "next/router";
import { useState } from "react";
import useSWR from "swr";
import ShiftTable from "../../../src/components/ShiftTable";
import {
  GET_ALL_DOCTORS_URL,
  GET_DOCTOR_URL,
  GET_SHIFT_INFO_URL,
} from "../../../src/constants/url";
import { defaultPage } from "../../../src/hocs/defaultPage";
import { protectRoute } from "../../../src/hocs/protectRoute";
import { useDoctor } from "../../../src/hooks/doctorHooks";
import { useShiftByDoctorId } from "../../../src/hooks/shiftHooks";

const useStyles = makeStyles((theme) => ({
  fab: {
    position: "fixed",
    bottom: theme.spacing(8),
    right: theme.spacing(2),
  },
}));

function SchedulerShiftPage() {
  const classes = useStyles();
  const router = useRouter();

  const handleClickAddNewShift = () => {
    router.push(router.pathname + "/add");
  };

  const {
    data: doctors,
    paging: doctorsPaging,
    isLoading: isDoctorLoading,
    isError: isDoctorError,
    setOffset: setDoctorsOffset,
    setLimit: setDoctorLimit,
  } = useDoctor();

  const {
    setStartedAtMin, setStartedAtMax
  } = useShiftByDoctorId();

  const handleChangeWeek = (date) => {
    setStartedAtMin(startOfWeek(date, {weekStartsOn: 2}));
    setStartedAtMax(endOfWeek(date, {weekStartsOn: 2}));
  }

  const getDoctorShift = (doctorId) => {
    return useShiftByDoctorId(doctorId);
  }

  return (
    <div>
      <ShiftTable
        doctors={doctors}
        paging={doctorsPaging}
        isLoading={isDoctorLoading}
        isError={isDoctorError}
        getDoctorShift={getDoctorShift}
        handleChangeWeek={handleChangeWeek}
        setOffset={setDoctorsOffset}
        setLimit={setDoctorLimit}
      />
      {/* <Fab
        className={classes.fab}
        color="primary"
        aria-label="Add new shift"
        onClick={handleClickAddNewShift}
      >
        <Add />
      </Fab> */}
    </div>
  );
}

export default protectRoute(defaultPage(SchedulerShiftPage));
