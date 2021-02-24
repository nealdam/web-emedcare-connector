import { Grid } from "@material-ui/core";
import PropTypes from "prop-types";
import BlockTable from "../BlockTable";
import DoctorInfo from "../DoctorDetail/DoctorInfo";
import NurseInfo from "../NurseDetail/NurseInfo";
import RoomInfo from "../RoomDetail/RoomInfo";
import ShiftInfo from "./ShiftInfo";

const blocks = [
  { id: 1, prefix: "A", startedAt: "08:00 AM", duration: 30 },
  { id: 2, prefix: "B", startedAt: "08:30 AM", duration: 30 },
  { id: 3, prefix: "C", startedAt: "09:00 AM", duration: 30 },
  { id: 4, prefix: "D", startedAt: "09:30 AM", duration: 30 },
  { id: 5, prefix: "E", startedAt: "10:00 AM", duration: 30 },
]

export default function ShiftDetail(props) {
 
  const { shift, isLoading, isError } = props;

  if (isLoading) return <div>Loading</div>
  if (isError) return <div>Error</div>

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <BlockTable blocks={shift.blocks} />
      </Grid>
      <Grid item xs={12} md={6}>
        <ShiftInfo shift={shift} />
      </Grid>
      <Grid item xs={12} md={6}>
        <RoomInfo room={shift.room} />
      </Grid>
      <Grid item xs={12} md={6}>
        <DoctorInfo doctor={shift.doctor} />
      </Grid>
      <Grid item xs={12} md={6}>
        <NurseInfo nurse={shift.nurse} />
      </Grid>
    </Grid>
  );
}

ShiftDetail.propTypes = {
  shift: PropTypes.object,
  isLoading: PropTypes.bool,
  isError: PropTypes.object,
};
