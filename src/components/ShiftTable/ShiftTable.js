import { useTranslation } from "../../i18n";
import Section from "../Section/Section";
import WeekPicker from "../WeekPicker";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { useState } from "react";
import {
  Grid,
  InputAdornment,
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@material-ui/core";
import ShiftCell from "./ShiftCell/ShiftCell";
import { format } from "date-fns";
import DayCell from "./DayCell";
import DoctorCell from "./DoctorCell";
import { useRouter } from "next/router";
import { Search } from "@material-ui/icons";

const doctorShifts = [
  {
    id: 1,
    doctorName: "Nguyễn Văn A",
    shiftDay: [
      {
        shifts: [
          { id: 1, time: "08:00 AM - 11:00 AM" },
          { id: 2, time: "01:00 PM - 06:00 PM" },
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
          { id: 2, time: "01:00 PM - 06:00 PM" },
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
          { id: 2, time: "01:00 PM - 06:00 PM" },
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
          { id: 2, time: "01:00 PM - 06:00 PM" },
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
          { id: 2, time: "01:00 PM - 06:00 PM" },
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
          { id: 2, time: "01:00 PM - 06:00 PM" },
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
          { id: 2, time: "01:00 PM - 06:00 PM" },
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
          { id: 2, time: "01:00 PM - 06:00 PM" },
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
          { id: 2, time: "01:00 PM - 06:00 PM" },
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
          { id: 2, time: "01:00 PM - 06:00 PM" },
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
    minWidth: 200,
  },
  dayCell: {
    minWidth: 250,
  },
  shiftCell: {
    cursor: "pointer",
    "&:hover": {
      background: theme.palette.action.hover,
    },
  },
  searchBox: {
    marginBottom: theme.spacing(2),
  },
}));

export default function ShiftTable(props) {
  const { t } = useTranslation();
  const classes = useStyles();
  const router = useRouter();

  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleClickShiftDetail = (shiftId) => {
    router.push(router.asPath + "/" + shiftId + "/detail");
  };

  return (
    <Section title={t("Shift table")}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={2}>
          <MuiPickersUtilsProvider utils={DateFnsUtils} >
            <WeekPicker date={selectedDate} setDate={setSelectedDate} />
          </MuiPickersUtilsProvider>
        </Grid>
        <Grid item xs={12} md={10}>
          <TextField
            className={classes.searchBox}
            variant="outlined"
            fullWidth
            label={t("Search")}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
            helperText={`${t("Search")}: ${t("Doctor name")}, ${t(
              "Doctor code"
            )}, ${t("Room name")}, ${t("Room number")}`}
          />
        </Grid>
      </Grid>
      <TableContainer
        className={classes.tableContainer}
        component={Paper}
        elevation={0}
        variant="outlined"
      >
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
                <TableCell>
                  <DoctorCell name={doctorShift.doctorName} code="001" />
                </TableCell>
                {doctorShift.shiftDay.map((day, index) => (
                  <TableCell key={index} style={{ verticalAlign: "top" }}>
                    <Grid container spacing={2}>
                      {day.shifts.map((shift) => (
                        <Grid item xs={12} key={shift.id}>
                          <ShiftCell
                            className={classes.shiftCell}
                            shift={shift}
                            onClick={() => handleClickShiftDetail(shift.id)}
                          />
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
