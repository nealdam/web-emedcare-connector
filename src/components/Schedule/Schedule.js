import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
  Grid,
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import {
  KeyboardDatePicker,
  KeyboardTimePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import { useState } from "react";
import { useTranslation } from "../../i18n";
import DoctorCell from "./DoctorCell/DoctorCell";
import AppointmentCell from "./AppointmentCell/AppointmentCell";
import {
  SCHEDULE_TABLE_CELL_MIN_WIDTH,
  TABLE_MIN_WIDTH,
  TIME_CELL_MIN_WiDTH,
} from "../../constants/dimensions";
import PropTypes from "prop-types";
import Section from "../Section";

const time = [
  { time: "0 AM" },
  { time: "1 AM" },
  { time: "2 AM" },
  { time: "3 AM" },
  { time: "4 AM" },
  { time: "5 AM" },
  { time: "6 AM" },
  { time: "7 AM" },
  { time: "8 AM" },
  { time: "9 AM" },
  { time: "10 AM" },
  { time: "11 AM" },
  { time: "12 PM" },
  { time: "1 PM" },
  { time: "2 PM" },
  { time: "3 PM" },
  { time: "4 PM" },
  { time: "5 PM" },
  { time: "6 PM" },
  { time: "7 PM" },
  { time: "8 PM" },
  { time: "9 PM" },
  { time: "10 PM" },
  { time: "11 PM" },
];

const doctorRow = [
  { doctorCode: 1, doctorName: "Nguyen Van A", roomNumber: "P.001" },
  { doctorCode: 2, doctorName: "Nguyen Van A", roomNumber: "P.001" },
  { doctorCode: 3, doctorName: "Nguyen Van A", roomNumber: "P.001" },
  { doctorCode: 4, doctorName: "Nguyen Van A", roomNumber: "P.001" },
  { doctorCode: 5, doctorName: "Nguyen Van A", roomNumber: "P.001" },
  { doctorCode: 6, doctorName: "Nguyen Van A", roomNumber: "P.001" },
  { doctorCode: 7, doctorName: "Nguyen Van A", roomNumber: "P.001" },
];

const appointmentRow = [
  { appointmentId: 1, patientName: "Tran Thi A", patientCode: "BN001" },
  { appointmentId: 2, patientName: "Tran Thi A", patientCode: "BN001" },
  { appointmentId: 3, patientName: "Tran Thi A", patientCode: "BN001" },
  { appointmentId: 4, patientName: "Tran Thi A", patientCode: "BN001" },
  { appointmentId: 5, patientName: "Tran Thi A", patientCode: "BN001" },
  { appointmentId: 6, patientName: "Tran Thi A", patientCode: "BN001" },
  { appointmentId: 7, patientName: "Tran Thi A", patientCode: "BN001" },
];

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: TABLE_MIN_WIDTH,
  },
  doctorCell: {
    minWidth: SCHEDULE_TABLE_CELL_MIN_WIDTH,
  },
  timeCell: {
    minWidth: TIME_CELL_MIN_WiDTH,
  },
  paper: {
    //TODO: Table horizontal scroll
    width: "100%",
    overflowX: "auto",
  },
}));

function Schedule() {
  const { t } = useTranslation();
  const classes = useStyles();

  const [selectedDate, setSelectedDate] = useState(
    new Date("2014-08-18T21:11:54")
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <Section title={t("Appointment list")}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              inputVariant="outlined"
              format="dd/MM/yyyy"
              margin="normal"
              id="date-picker-inline"
              label={t("Date")}
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
          </MuiPickersUtilsProvider>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper} variant="outlined">
            <TableContainer>
              <Table
                aria-label="customer service schedule"
                className={classes.table}
              >
                <TableHead>
                  <TableCell className={classes.timeCell}></TableCell>
                  {doctorRow.map((row) => (
                    <TableCell
                      key={row.doctorCode}
                      className={classes.doctorCell}
                    >
                      <DoctorCell
                        doctorName={row.doctorName}
                        roomNumber={row.roomNumber}
                      />
                    </TableCell>
                  ))}
                </TableHead>
                <TableBody>
                  {time.map((rowTime) => (
                    <TableRow key={rowTime.time}>
                      <TableCell>{rowTime.time}</TableCell>
                      {appointmentRow.map((row) => (
                        <TableCell key={row.appointmentId}>
                          <AppointmentCell
                            patientName={row.patientName}
                            patientCode={row.patientCode}
                          />
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
      </Grid>
    </Section>
  );
}

Schedule.propTypes = {
  appointments: PropTypes.array,
};

export default Schedule;
