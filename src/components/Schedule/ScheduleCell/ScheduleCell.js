import PropTypes from 'prop-types'
import { Fragment } from "react";
import { useAppointmentByDoctorOnDate } from "../../../hooks/appointmentHooks";
import { useTranslation } from '../../../i18n';
import AppointmentCell from "../AppointmentCell/AppointmentCell";

export default function ScheduleCell(props) {
  const { t } = useTranslation();

  const { doctorId, selectedTime } = props;

  // console.debug("selected time: " + selectedTime.toISOString());

  const {
    data: appointments,
    isLoading,
    isError,
  } = useAppointmentByDoctorOnDate(doctorId, selectedTime);

  if (isLoading) return <div>{t("Loading")}</div>;
  if (isError) return <div>{t("Error")}</div>;

  return (
    <Fragment>
      {appointments.map((appointment) => (
        <AppointmentCell
          key={appointment.id}
          patientCode={appointment.patient.hisCode}
          patientName={appointment.patient.name}
          roomNumber={appointment.room.number}
        />
      ))}
    </Fragment>
  );
}

ScheduleCell.propTypes = {
  doctorId: PropTypes.number,
  selectedTime: PropTypes.object,
}
