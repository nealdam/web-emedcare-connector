import {
  Button,
  Chip,
  colors,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@material-ui/core";
import PropTypes from "prop-types";
import { useState } from "react";
import { DEFAULT_PAGE_SIZE, DEFAULT_PAGE_SIZE_OPTIONS } from "../../constants/pagingConstant";
import { useTranslation } from "../../i18n";
import { toDateTime } from "../../utils/datetimeUtil";
import ColorChip from "../ColorChip/ColorChip";
import SearchBox from "../SearchBox";
import Section from "../Section/Section";

export default function ConfirmAppointmentTable(props) {
  const { appointments, paging, isLoading, isError, setOffset, setLimit, handleClickAppointmentDetail } = props;
  const { t } = useTranslation();

  const [rowsPerPage, setRowsPerPage] = useState(DEFAULT_PAGE_SIZE);
  const [pageOffset, setPageOffset] = useState(0);

  const handleChangePage = (event, offset) => {
    setPageOffset(offset);
    setOffset(offset);
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(event.target.value);
    setLimit(event.target.value);
  }


  if (isLoading) return <div>Loading</div>
  if (isError) return <div>Error</div>

  return (
    <Section title={t("Appointment confirmation")}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <SearchBox
            helpText={`${t("Search")}: ${t("Patient name")}, ${t(
              "Patient code"
            )}`}
          />
        </Grid>
        <Grid item xs={12} md={2}>
        </Grid>
        <Grid item xs={12}>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>{t("Patient code")}</TableCell>
                  <TableCell>{t("Patient name")}</TableCell>
                  <TableCell>{t("Appointment time")}</TableCell>
                  <TableCell align="center">{t("Status")}</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {appointments.map((appointment) => (
                  <TableRow key={appointment.id}>
                    <TableCell>{appointment.patient.hisCode}</TableCell>
                    <TableCell>{appointment.patient.name}</TableCell>
                    <TableCell>{toDateTime(appointment.block.startedAt)}</TableCell>
                    <TableCell align="center">
                      {appointment.isConfirmed 
                      ? <ColorChip label={t("Confirmed")} variant="success" /> 
                      : <ColorChip label={t("Pending confirmation")} variant="warning" />}
                    </TableCell>
                    <TableCell>
                      <Button
                        color="primary"
                        variant="outlined"
                        onClick={(e) => {e.preventDefault(); handleClickAppointmentDetail(appointment.id)}}
                      >
                        {t("Info")}
                      </Button>
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
        </Grid>
      </Grid>
    </Section>
  );
}

ConfirmAppointmentTable.propTypes = {
  appointments: PropTypes.arrayOf(PropTypes.object),
  paging: PropTypes.object,
  isLoading: PropTypes.bool,
  isError: PropTypes.object,
  setOffset: PropTypes.func,
  setLimit: PropTypes.func,
  handleClickAppointmentDetail: PropTypes.func,
};


