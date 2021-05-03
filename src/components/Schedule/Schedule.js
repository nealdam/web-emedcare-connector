import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
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
  TablePagination,
  TableRow,
  TextField,
} from "@material-ui/core";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import { useEffect, useState } from "react";
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
import { Search } from "@material-ui/icons";
import { addHours, getDate, parse, parseJSON, startOfDay } from "date-fns";
import {
  DEFAULT_PAGE_SIZE,
  DEFAULT_PAGE_SIZE_OPTIONS,
} from "../../constants/pagingConstant";
import ScheduleRow from "./ScheduleRow";

// FIXME: time number
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
  searchBox: {
    marginTop: 16,
    marginBottom: 8,
  },
}));

function Schedule(props) {
  const { t } = useTranslation();
  const classes = useStyles();

  const {
    isLoading,
    isError,
    doctors,
    paging,
    setSelectedDate: setDate,
    setOffset,
    setLimit,
  } = props;

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [rowsPerPage, setRowsPerPage] = useState(DEFAULT_PAGE_SIZE);
  const [pageOffset, setPageOffset] = useState(0);

  const handleChangePage = (event, offset) => {
    setPageOffset(offset);
    setOffset(offset);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(event.target.value);
    setLimit(event.target.value);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  if (isLoading) return <div>{t("Loading")}</div>;
  if (isError) return <div>{t("Error")}</div>;

  return (
    <Section title={t("Appointment list")}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={2}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DatePicker
              fullWidth
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
            )}, ${t("Patient name")}, ${t("Patient code")}, ${t(
              "Room number"
            )}`}
          />
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper} variant="outlined">
            <TableContainer>
              <Table
                aria-label="customer service schedule"
                className={classes.table}
              >
                <TableHead>
                  <TableRow>
                    <TableCell className={classes.timeCell}></TableCell>
                    {doctors.map((doctor) => (
                      <TableCell key={doctor.id} className={classes.doctorCell}>
                        <DoctorCell
                          doctorName={doctor.name}
                          roomNumber={doctor.hisCode}
                        />
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {time.map((value, index) => (
                    <TableRow key={index}>
                      <TableCell>{value.time}</TableCell>
                      <ScheduleRow
                        doctors={doctors}
                        currentDateTime={addHours(startOfDay(selectedDate), index)}
                      />
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={DEFAULT_PAGE_SIZE_OPTIONS}
              component="div"
              count={paging.totalCount}
              rowsPerPage={rowsPerPage}
              page={pageOffset}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
            />
          </Paper>
        </Grid>
      </Grid>
    </Section>
  );
}

Schedule.propTypes = {
  isLoading: PropTypes.bool,
  isError: PropTypes.object,
  doctors: PropTypes.array,
  setSelectedDate: PropTypes.func,
  setOffset: PropTypes.func,
  setLimit: PropTypes.func,
};

export default Schedule;
