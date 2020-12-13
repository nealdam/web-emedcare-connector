import { useTranslation } from "../../i18n";
import Section from "../Section/Section";
import WeekPicker from "../WeekPicker";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { useState } from "react";
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
import ShiftCell from "./ShiftCell/ShiftCell";
import { format } from "date-fns";
import DayCell from "./DayCell";
import DoctorCell from "./DoctorCell";

const doctorShifts = [
  {
    id: 1,
    doctorName: "Nguyễn Văn A",
    shiftDay: [
      {
        shifts: [
          { id: 1, time: "08:00 AM - 11:00 AM" },
          { id: 1, time: "01:00 PM - 06:00 PM" },
        ],
      },
      { shifts: [{ id: 2, time: "08:00 AM - 11:00 AM" }] },
      { shifts: [{ id: 3, time: "08:00 AM - 11:00 AM" }] },
      { shifts: [{ id: 4, time: "08:00 AM - 11:00 AM" }] },
      { shifts: [{ id: 5, time: "08:00 AM - 11:00 AM" }] },
      { shifts: [{ id: 6, time: "08:00 AM - 11:00 AM" }] },
      { shifts: [{ id: 7, time: "08:00 AM - 11:00 AM" }] },
    ],
  },
  {
    id: 2,
    doctorName: "Nguyễn Văn A",
    shiftDay: [
      { shifts: [{ id: 2, time: "08:00 AM - 11:00 AM" }] },
      {
        shifts: [
          { id: 1, time: "08:00 AM - 11:00 AM" },
          { id: 1, time: "01:00 PM - 06:00 PM" },
        ],
      },
      { shifts: [{ id: 3, time: "08:00 AM - 11:00 AM" }] },
      { shifts: [{ id: 4, time: "08:00 AM - 11:00 AM" }] },
      { shifts: [{ id: 5, time: "08:00 AM - 11:00 AM" }] },
      { shifts: [{ id: 6, time: "08:00 AM - 11:00 AM" }] },
      { shifts: [{ id: 7, time: "08:00 AM - 11:00 AM" }] },
    ],
  },
  {
    id: 3,
    doctorName: "Nguyễn Văn A",
    shiftDay: [
      {
        shifts: [
          { id: 1, time: "08:00 AM - 11:00 AM" },
          { id: 1, time: "01:00 PM - 06:00 PM" },
        ],
      },
      { shifts: [{ id: 2, time: "08:00 AM - 11:00 AM" }] },
      { shifts: [{ id: 3, time: "08:00 AM - 11:00 AM" }] },
      { shifts: [{ id: 4, time: "08:00 AM - 11:00 AM" }] },
      { shifts: [{ id: 5, time: "08:00 AM - 11:00 AM" }] },
      { shifts: [{ id: 6, time: "08:00 AM - 11:00 AM" }] },
      { shifts: [{ id: 7, time: "08:00 AM - 11:00 AM" }] },
    ],
  },
  {
    id: 4,
    doctorName: "Nguyễn Văn A",
    shiftDay: [
      {
        shifts: [
          { id: 1, time: "08:00 AM - 11:00 AM" },
          { id: 1, time: "01:00 PM - 06:00 PM" },
        ],
      },
      { shifts: [{ id: 2, time: "08:00 AM - 11:00 AM" }] },
      { shifts: [{ id: 3, time: "08:00 AM - 11:00 AM" }] },
      { shifts: [{ id: 4, time: "08:00 AM - 11:00 AM" }] },
      { shifts: [{ id: 5, time: "08:00 AM - 11:00 AM" }] },
      { shifts: [{ id: 6, time: "08:00 AM - 11:00 AM" }] },
      { shifts: [{ id: 7, time: "08:00 AM - 11:00 AM" }] },
    ],
  },
  {
    id: 5,
    doctorName: "Nguyễn Văn A",
    shiftDay: [
      {
        shifts: [
          { id: 1, time: "08:00 AM - 11:00 AM" },
          { id: 1, time: "01:00 PM - 06:00 PM" },
        ],
      },
      { shifts: [{ id: 2, time: "08:00 AM - 11:00 AM" }] },
      { shifts: [{ id: 3, time: "08:00 AM - 11:00 AM" }] },
      { shifts: [{ id: 4, time: "08:00 AM - 11:00 AM" }] },
      { shifts: [{ id: 5, time: "08:00 AM - 11:00 AM" }] },
      { shifts: [{ id: 6, time: "08:00 AM - 11:00 AM" }] },
      { shifts: [{ id: 7, time: "08:00 AM - 11:00 AM" }] },
    ],
  },
  {
    id: 6,
    doctorName: "Nguyễn Văn A",
    shiftDay: [
      {
        shifts: [
          { id: 1, time: "08:00 AM - 11:00 AM" },
          { id: 1, time: "01:00 PM - 06:00 PM" },
        ],
      },
      { shifts: [{ id: 2, time: "08:00 AM - 11:00 AM" }] },
      { shifts: [{ id: 3, time: "08:00 AM - 11:00 AM" }] },
      { shifts: [{ id: 4, time: "08:00 AM - 11:00 AM" }] },
      { shifts: [{ id: 5, time: "08:00 AM - 11:00 AM" }] },
      { shifts: [{ id: 6, time: "08:00 AM - 11:00 AM" }] },
      { shifts: [{ id: 7, time: "08:00 AM - 11:00 AM" }] },
    ],
  },
  {
    id: 7,
    doctorName: "Nguyễn Văn A",
    shiftDay: [
      {
        shifts: [
          { id: 1, time: "08:00 AM - 11:00 AM" },
          { id: 1, time: "01:00 PM - 06:00 PM" },
        ],
      },
      { shifts: [{ id: 2, time: "08:00 AM - 11:00 AM" }] },
      { shifts: [{ id: 3, time: "08:00 AM - 11:00 AM" }] },
      { shifts: [{ id: 4, time: "08:00 AM - 11:00 AM" }] },
      { shifts: [{ id: 5, time: "08:00 AM - 11:00 AM" }] },
      { shifts: [{ id: 6, time: "08:00 AM - 11:00 AM" }] },
      { shifts: [{ id: 7, time: "08:00 AM - 11:00 AM" }] },
    ],
  },
  {
    id: 8,
    doctorName: "Nguyễn Văn A",
    shiftDay: [
      {
        shifts: [
          { id: 1, time: "08:00 AM - 11:00 AM" },
          { id: 1, time: "01:00 PM - 06:00 PM" },
        ],
      },
      { shifts: [{ id: 2, time: "08:00 AM - 11:00 AM" }] },
      { shifts: [{ id: 3, time: "08:00 AM - 11:00 AM" }] },
      { shifts: [{ id: 4, time: "08:00 AM - 11:00 AM" }] },
      { shifts: [{ id: 5, time: "08:00 AM - 11:00 AM" }] },
      { shifts: [{ id: 6, time: "08:00 AM - 11:00 AM" }] },
      { shifts: [{ id: 7, time: "08:00 AM - 11:00 AM" }] },
    ],
  },
  {
    id: 9,
    doctorName: "Nguyễn Văn A",
    shiftDay: [
      {
        shifts: [
          { id: 1, time: "08:00 AM - 11:00 AM" },
          { id: 1, time: "01:00 PM - 06:00 PM" },
        ],
      },
      { shifts: [{ id: 2, time: "08:00 AM - 11:00 AM" }] },
      { shifts: [{ id: 3, time: "08:00 AM - 11:00 AM" }] },
      { shifts: [{ id: 4, time: "08:00 AM - 11:00 AM" }] },
      { shifts: [{ id: 5, time: "08:00 AM - 11:00 AM" }] },
      { shifts: [{ id: 6, time: "08:00 AM - 11:00 AM" }] },
      { shifts: [{ id: 7, time: "08:00 AM - 11:00 AM" }] },
    ],
  },
  {
    id: 10,
    doctorName: "Nguyễn Văn A",
    shiftDay: [
      {
        shifts: [
          { id: 1, time: "08:00 AM - 11:00 AM" },
          { id: 1, time: "01:00 PM - 06:00 PM" },
        ],
      },
      { shifts: [{ id: 2, time: "08:00 AM - 11:00 AM" }] },
      { shifts: [{ id: 3, time: "08:00 AM - 11:00 AM" }] },
      { shifts: [{ id: 4, time: "08:00 AM - 11:00 AM" }] },
      { shifts: [{ id: 5, time: "08:00 AM - 11:00 AM" }] },
      { shifts: [{ id: 6, time: "08:00 AM - 11:00 AM" }] },
      { shifts: [{ id: 7, time: "08:00 AM - 11:00 AM" }] },
    ],
  },
];

const useStyles = makeStyles((theme) => ({
  tableContainer: {
    marginTop: theme.spacing(2),
  },
  doctorCell: {
    minWidth: 200
  },
  dayCell: {
    minWidth: 250
  }
}))

export default function ShiftTable(props) {
  const { t } = useTranslation();
  const classes = useStyles();

  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <Section title={t("Shift table")}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <WeekPicker date={selectedDate} setDate={setSelectedDate} />
      </MuiPickersUtilsProvider>
      <TableContainer className={classes.tableContainer} component={Paper} elevation={0} variant="outlined">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className={classes.doctorCell}></TableCell>
              <TableCell className={classes.dayCell} align="center">
                <DayCell day={t("Monday")} date={format(new Date(), "dd")} />
              </TableCell>
              <TableCell className={classes.dayCell} align="center">
                <DayCell day={t("Tuesday")} date={format(new Date(), "dd")} />
              </TableCell>
              <TableCell className={classes.dayCell} align="center">
                <DayCell day={t("Wednesday")} date={format(new Date(), "dd")} />
              </TableCell>
              <TableCell className={classes.dayCell} align="center">
                <DayCell day={t("Thursday")} date={format(new Date(), "dd")} />
              </TableCell>
              <TableCell className={classes.dayCell} align="center">
                <DayCell day={t("Friday")} date={format(new Date(), "dd")} />
              </TableCell>
              <TableCell className={classes.dayCell} align="center">
                <DayCell day={t("Saturday")} date={format(new Date(), "dd")} />
              </TableCell>
              <TableCell className={classes.dayCell} align="center">
                <DayCell day={t("Sunday")} date={format(new Date(), "dd")} />
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {doctorShifts.map((doctorShift) => (
              <TableRow key={doctorShift.id}>
                <TableCell><DoctorCell name={doctorShift.doctorName} code="001" /></TableCell>
                {doctorShift.shiftDay.map((day, index) => (
                  <TableCell key={index} style={{ verticalAlign: 'top'}} >
                    <Grid container spacing={2}>
                      {day.shifts.map((shift) => (
                        <Grid item xs={12} key={shift.id}>
                          <ShiftCell shift={shift} />
                        </Grid>
                      ))}
                    </Grid>
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Section>
  );
}