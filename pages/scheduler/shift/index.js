import { Fab, makeStyles } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import { endOfWeek, startOfWeek } from "date-fns";
import { useRouter } from "next/router";
import { useState } from "react";
import useSWR from "swr";
import ShiftTable from "../../../src/components/ShiftTable";
import { GET_ALL_DOCTORS_URL, GET_DOCTOR_URL, GET_SHIFT_INFO_URL } from "../../../src/constants/url";
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
  const router = useRouter();

  const [selectedDate, setSelectedDate] = useState(new Date());

  let doctorUrl = GET_DOCTOR_URL;
  
  const { data: doctors, error } = useSWR(doctorUrl, fetcher);

  const handleClickAddNewShift = () => {
    router.push(router.pathname + "/add")
  }

  const getDoctorShift = (doctorId) => {
    let shiftUrl = GET_SHIFT_INFO_URL 
      + "?doctor_id=" + doctorId
      + "&start_at_min=" + startOfWeek(selectedDate).toISOString()
      + "&start_at_max=" + endOfWeek(selectedDate).toISOString();
    const { data, error } = useSWR(shiftUrl, fetcher);

    return {
      shifts: data,
      isLoading: !error && !data,
      isError: error
    }
  }

  if (error) return <div>failed to load</div>;
  if (!doctors) return <div>loading...</div>;

  return (
    <div>
      <ShiftTable doctors={doctors} getDoctorShift={getDoctorShift} selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
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
