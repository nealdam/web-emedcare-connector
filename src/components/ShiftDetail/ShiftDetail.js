import { Grid } from "@material-ui/core";
import PropTypes from "prop-types";
import DoctorInfo from "../DoctorDetail/DoctorInfo";
import NurseInfo from "../NurseDetail/NurseInfo";
import RoomInfo from "../RoomDetail/RoomInfo";
import ShiftInfo from "./ShiftInfo";

const shiftInfo = { id: 1, startedAt: "08:00 AM", endedAt: "11:00 AM" };
const roomInfo = {
  id: 1,
  hisCode: "001",
  number: "P001",
  name: "Nhi",
  facility: "CS1",
};
const doctorInfo = {
  id: 1,
  hisCode: "001",
  name: "Nguyến Văn A",
  gender: 0,
  birthDate: "29/11/1888",
  specialist: ["Nhi", "Tai, mũi, họng", "Răng hàm mặt"],
};
const nurseInfo = {
  id: 1,
  hisCode: "001",
  name: "Nguyen Thi B",
  gender: 1,
  birthDate: "24/12/1889",
};

export default function ShiftDetail(props) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <ShiftInfo shiftInfo={shiftInfo} />
      </Grid>
      <Grid item xs={12} md={6}>
        <RoomInfo roomInfo={roomInfo} />
      </Grid>
      <Grid item xs={12} md={6}>
        <DoctorInfo doctorProfile={doctorInfo} />
      </Grid>
      <Grid item xs={12} md={6}>
        <NurseInfo nurseInfo={nurseInfo} />
      </Grid>
    </Grid>
  );
}

ShiftDetail.propTypes = {
  shiftInfo: PropTypes.object,
  roomInfo: PropTypes.object,
  doctorInfo: PropTypes.object,
  nurseInfo: PropTypes.object,
};
