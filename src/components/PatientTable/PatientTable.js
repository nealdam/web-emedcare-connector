import {
  IconButton,
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
import InfoIcon from "@material-ui/icons/Info";
import AppointmentIcon from "@material-ui/icons/CalendarToday";
import { useTranslation } from "../../i18n";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import Section from "../Section";
import { Search } from "@material-ui/icons";
import { format, parseISO } from "date-fns";
import FemaleIcon from "../../constants/icons/FemaleIcon";
import MaleIcon from "../../constants/icons/MaleIcon";
import SexIcon from "../SexIcon/SexIcon";
import {
  DEFAULT_PAGE_SIZE,
  DEFAULT_PAGE_SIZE_OPTIONS,
} from "../../constants/pagingConstant";
import { useState } from "react";

const useStyle = makeStyles((theme) => ({
  actionCell: {
    maxWidth: 100,
  },
  searchBox: {
    marginBottom: theme.spacing(2),
  },
}));

export default function PatientTable(props) {
  const { t } = useTranslation();
  const classes = useStyle();
  const router = useRouter();

  const {
    patients,
    paging,
    isLoading,
    isError,
    setOffset,
    setLimit,
  } = props;

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

  const handleClickPatientInfo = (patientId) => {
    router.push(router.asPath + "/" + patientId + "/profile");
  };

  const handleClickPatientAppointment = (patientId) => {
    router.push(router.asPath + "/" + patientId + "/appointment");
  };

  if (isLoading) return <div>{t("Loading")}</div>;
  if (isError) return <div>{t("Error")}</div>;

  return (
    <Section title={t("Patient list")}>
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
        helperText={`${t("Search")}: ${t("Patient name")}, ${t(
          "Patient code"
        )}, ${t("Phone number")}`}
      />
      <TableContainer component={Paper}>
        <Table aria-label="Patient table">
          <TableHead>
            <TableRow>
              <TableCell>{t("Pt.No")}</TableCell>
              <TableCell>{t("Name")}</TableCell>
              <TableCell align="center">{t("Birth date")}</TableCell>
              <TableCell align="center">{t("Sex")}</TableCell>
              <TableCell size="small" align="center">
                {t("Info")}
              </TableCell>
              <TableCell size="small" align="center">
                {t("Appointment")}
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {patients.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.hisCode}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell align="center">
                  {format(parseISO(row.birthDate), "dd/MM/yyy")}
                </TableCell>
                <TableCell align="center">
                  {/* {row.sex ? <FemaleIcon /> : <MaleIcon />} */}
                  <SexIcon sex={row.sex} />
                </TableCell>
                <TableCell align="center">
                  <IconButton
                    color="primary"
                    aria-label="Patient info"
                    component="span"
                    onClick={() => handleClickPatientInfo(row.id)}
                  >
                    <InfoIcon />
                  </IconButton>
                </TableCell>
                <TableCell align="center">
                  <IconButton
                    color="primary"
                    aria-label="Patient appointment"
                    component="span"
                    onClick={() => handleClickPatientAppointment(row.id)}
                  >
                    <AppointmentIcon />
                  </IconButton>
                </TableCell>
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
    </Section>
  );
}

PatientTable.propTypes = {
  patients: PropTypes.array,
  paging: PropTypes.object,
  isLoading: PropTypes.bool,
  isError: PropTypes.object,
  setOffset: PropTypes.func,
  setLimit: PropTypes.func,
};
