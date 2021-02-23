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
import SearchBox from "../SearchBox";
import Section from "../Section/Section";

export default function ConfirmAppointmentTable(props) {
  const { t } = useTranslation();
  const { appointments, facilities } = props;

  const [selectedFacility, setSelectedFacility] = useState(0);

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
          {/* <FormControl variant="outlined" fullWidth>
            <InputLabel>{t("Facility")}</InputLabel>
            <Select
              value={selectedFacility}
              onChange={(event) => {
                setSelectedFacility(event.target.value);
              }}
              label={t("Facility")}
            >
              <MenuItem value={0}>
                <em>{t("All")}</em>
              </MenuItem>
              {facilities.map((facility) => (
                <MenuItem key={facility.id} value={facility.id}>
                  {facility.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl> */}
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
                      ? <Chip label={t("Confirmed")} color="primary" style={{backgroundColor: colors.green[500]}} /> 
                      : <Chip label={t("Pending confirmation")} color="primary" style={{backgroundColor: colors.yellow[500], color: "black"}} />}
                    </TableCell>
                    <TableCell>
                      <Button
                        color="primary"
                        variant="outlined"
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
};

ConfirmAppointmentTable.defaultProps = {
  facilities: [
    {
      id: 1,
      name: "CS1",
    },
    { id: 2, name: "CS2" },
  ],
  appointments: [
    {
      id: 1,
      hisCode: "001",
      patientName: "Nguyen Van A",
      appointmentTime: "08:00 AM - 09:00 AM 21/12/2020",
      isConfirmed: false,
    },
    {
      id: 2,
      hisCode: "001",
      patientName: "Nguyen Van A",
      appointmentTime: "08:00 AM - 09:00 AM 21/12/2020",
      isConfirmed: false,
    },
    {
      id: 3,
      hisCode: "001",
      patientName: "Nguyen Van A",
      appointmentTime: "08:00 AM - 09:00 AM 21/12/2020",
      isConfirmed: false,
    },
    {
      id: 4,
      hisCode: "001",
      patientName: "Nguyen Van A",
      appointmentTime: "08:00 AM - 09:00 AM 21/12/2020",
      isConfirmed: true,
    },
    {
      id: 5,
      hisCode: "001",
      patientName: "Nguyen Van A",
      appointmentTime: "08:00 AM - 09:00 AM 21/12/2020",
      isConfirmed: true,
    },
  ],
};
