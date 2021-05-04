import { Grid } from "@material-ui/core";
import PropTypes from "prop-types";
import { useTranslation } from "../../i18n";
import BlockInfo from "../BlockInfo";
import DoctorInfo from "../DoctorDetail/DoctorInfo";
import PatientInfo from "../PatientInfo";
import RoomInfo from "../RoomDetail/RoomInfo";
import Section from "../Section/Section";
import AppointmentInfo from "./AppointmentInfo/AppointmentInfo";
import AppointmentResult from "./AppointmentResult";
import BookerInfo from "./BookerInfo";

export default function AppointmentDetail(props) {
  const { t } = useTranslation();
  const { appointment, isLoading, isError } = props;

  if (isLoading) return <div>{t("Loading")}</div>;
  if (isError) return <div>{t("Error")}</div>;

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <AppointmentInfo appointment={appointment} />
      </Grid>
      <Grid item xs={12} md={6}>
        <BookerInfo booker={appointment.booker} />
      </Grid>
      <Grid item xs={12} md={6}>
        <PatientInfo patient={appointment.patient} />
      </Grid>
      <Grid item xs={12} md={6}>
        <RoomInfo room={appointment.room} />
      </Grid>
      <Grid item xs={12} md={6}>
        <BlockInfo block={appointment.block} />
      </Grid>
      <Grid item xs={12} md={6}>
        <DoctorInfo doctor={appointment.doctor} />
      </Grid>
      <Grid item xs={12}>
        <AppointmentResult result={appointment.examination} />
      </Grid>
    </Grid>
  );
}

AppointmentDetail.propTypes = {
  appointment: PropTypes.object,
  isLoading: PropTypes.bool,
  isError: PropTypes.object,
};
