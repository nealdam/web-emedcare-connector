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
  TableRow,
} from "@material-ui/core";
import PropTypes from "prop-types";
import { useState } from "react";
import { useTranslation } from "../../i18n";
import { toDateTime } from "../../utils/datetimeUtil";
import ColorChip from "../ColorChip/ColorChip";
import SearchBox from "../SearchBox";
import Section from "../Section/Section";

export default function ConfirmAppointmentTable(props) {
  const { t } = useTranslation();
  const { appointments, handleClickAppointmentDetail } = props;

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
        </Grid>
      </Grid>
    </Section>
  );
}

ConfirmAppointmentTable.propTypes = {
  appointments: PropTypes.arrayOf(PropTypes.object),
  handleClickAppointmentDetail: PropTypes.func,
};


