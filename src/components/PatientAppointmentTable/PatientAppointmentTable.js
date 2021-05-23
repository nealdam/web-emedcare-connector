import {
  Paper,
  Table,
  TableContainer,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  Chip,
  colors,
  IconButton,
} from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import { useTranslation } from "../../i18n";
import PropTypes from 'prop-types';
import { toDate, toTime } from "../../utils/datetimeUtil";
import { addMinutes, parse, parseISO } from "date-fns";
import InfoIcon from '@material-ui/icons/Info';

export default function PatientAppointmentTable(props) {
  const { t } = useTranslation();
  const { appointments, isLoading, isError, handleClickAppointmentDetail } = props;

  if (isLoading) return <div>{t("Loading")}</div>
  if (isError) return <div>{t("Error")}</div>

  return (
    <div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>{t("Room")}</TableCell>
              <TableCell>{t("Doctor")}</TableCell>
              <TableCell>{t("Date")}</TableCell>
              <TableCell>{t("Shift")}</TableCell>
              <TableCell>{t("Block")}</TableCell>
              {/* <TableCell>{t("Specialist")}</TableCell> */}
              <TableCell>{t("Status")}</TableCell>
              <TableCell>{t("Info")}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {appointments.map((appointment) => (
              <TableRow key={appointment.id}>
                <TableCell>{appointment.room.number}</TableCell>
                <TableCell>{appointment.doctor.name}</TableCell>
                <TableCell>{toDate(appointment.shift.startedAt)}</TableCell>
                <TableCell>{toTime(appointment.shift.startedAt)}</TableCell>
                <TableCell>{appointment.block.prefix} [{toTime(appointment.block.startedAt)} - {toTime(addMinutes(parseISO(appointment.block.startedAt), (appointment.block.duration * 60)).toISOString())}]</TableCell>
                {/* <TableCell>{appointment.specialist}</TableCell> */}
                <TableCell>
                  {
                    // TODO: fix this hard code
                    appointment.status.name == "WaitingConfirm"
                    ? <Chip label={appointment.status.displayName} />
                    : appointment.status.name == "WaitingCheckin"
                      ? <Chip label={appointment.status.displayName} />
                      : appointment.status.name == "WaitingExamination"
                        ? <Chip label={appointment.status.displayName} />
                        : appointment.status.name == "WaitingResult"
                          ? <Chip label={appointment.status.displayName} />
                          : appointment.status.name == "Done"
                            ? <Chip label={appointment.status.displayName} color="primary" style={{backgroundColor: colors.green[500]}} />
                            : <Chip label={appointment.status.displayName} color="primary" style={{backgroundColor: colors.red[500]}} />
                  }
                </TableCell>
                <TableCell>
                  <IconButton color="primary" onClick={() => handleClickAppointmentDetail(appointment.id)}>
                    <InfoIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

PatientAppointmentTable.propTypes = {
  appointments: PropTypes.array,
  isLoading: PropTypes.bool,
  isError: PropTypes.object,
  handleClickAppointmentDetail: PropTypes.func,
}