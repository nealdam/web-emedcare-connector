import PropTypes from "prop-types";
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
import { addDays, format, isSameDay, parse, parseISO, startOfWeek } from "date-fns";
import DayCell from "./DayCell";
import DoctorCell from "./DoctorCell";
import { useRouter } from "next/router";
import { Search } from "@material-ui/icons";

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

const ShiftRow = (props) => {
  const classes = useStyles();
  const {
    doctor,
    doctorShifts: { shifts, isLoading, isError },
    firstDateOfWeek,
  } = props;

  const weekDayIndex = [0, 1, 2, 3, 4, 5, 6];

  return (
    <TableRow key={doctor.id}>
      <TableCell>
        <DoctorCell name={doctor.name} code={doctor.hisCode} />
      </TableCell>
      {
        isLoading
        ? <TableCell colSpan={7}>loading</TableCell>
        : isError
          ? <TableCell colSpan={7}>error</TableCell>
          : weekDayIndex.map((dayIndex, index) => {
            const currentCellDate = addDays(firstDateOfWeek, dayIndex);
            return (
              <TableCell key={index} style={{ verticalAlign: "top" }}>
                <Grid container spacing={2}>
                {shifts.map((shift) => {
                  if (isSameDay(currentCellDate, parseISO(shift.startedAt))) {
                    return (
                      <Grid item xs={12} key={shift.id}>
                          <ShiftCell
                            className={classes.shiftCell}
                            shift={shift}
                            onClick={() => handleClickShiftDetail(shift.id)}
                          />
                        </Grid>
                    )
                  }
                })}
                </Grid>
              </TableCell>
            )
          })
      }
    </TableRow>
  );
};

export default function ShiftTable(props) {
  const classes = useStyles();
  const { doctors, getDoctorShift, selectedDate, setSelectedDate } = props;
  const { t } = useTranslation();
  const router = useRouter();

  const weekDayIndex = [0, 1, 2, 3, 4, 5, 6];

  const weekStartDay = startOfWeek(selectedDate, { weekStartsOn: 1 });

  const handleClickShiftDetail = (shiftId) => {
    router.push(router.asPath + "/" + shiftId + "/detail");
  };

  return (
    <Section title={t("Shift table")}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={2}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
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
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell className={classes.doctorCell}></TableCell>
              {weekDayIndex.map((number) => (
                <TableCell className={classes.dayCell} align="center">
                  <DayCell
                    day={t(format(addDays(weekStartDay, number), "EEEE"))}
                    date={format(addDays(weekStartDay, number), "dd")}
                  />
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {doctors.map((doctor) => (
              <ShiftRow
                doctor={doctor}
                doctorShifts={getDoctorShift(doctor.id)}
                firstDateOfWeek={startOfWeek(selectedDate)}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Section>
  );
}

ShiftTable.propTypes = {
  doctors: PropTypes.arrayOf(PropTypes.object),
  getDoctorShift: PropTypes.func,
  selectedDate: PropTypes.object,
  setSelectedDate: PropTypes.func,
};
