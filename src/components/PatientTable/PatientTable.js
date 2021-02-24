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

// const patients = [
//   {
//     id: 1,
//     hiscode: "001",
//     birthDate: "26/12/2997",
//     name: "Trần Văn A",
//     phoneNumber: "0906587525",
//   },
//   {
//     id: 2,
//     hiscode: "001",
//     birthDate: "26/12/2997",
//     name: "Trần Văn A",
//     phoneNumber: "0906587525",
//   },
//   {
//     id: 3,
//     hiscode: "001",
//     birthDate: "26/12/2997",
//     name: "Trần Văn A",
//     phoneNumber: "0906587525",
//   },
//   {
//     id: 4,
//     hiscode: "001",
//     birthDate: "26/12/2997",
//     name: "Trần Văn A",
//     phoneNumber: "0906587525",
//   },
//   {
//     id: 5,
//     hiscode: "001",
//     birthDate: "26/12/2997",
//     name: "Trần Văn A",
//     phoneNumber: "0906587525",
//   },
//   {
//     id: 6,
//     hiscode: "001",
//     birthDate: "26/12/2997",
//     name: "Trần Văn A",
//     phoneNumber: "0906587525",
//   },
//   {
//     id: 7,
//     hiscode: "001",
//     birthDate: "26/12/2997",
//     name: "Trần Văn A",
//     phoneNumber: "0906587525",
//   },
//   {
//     id: 8,
//     hiscode: "001",
//     birthDate: "26/12/2997",
//     name: "Trần Văn A",
//     phoneNumber: "0906587525",
//   },
//   {
//     id: 9,
//     hiscode: "001",
//     birthDate: "26/12/2997",
//     name: "Trần Văn A",
//     phoneNumber: "0906587525",
//   },
//   {
//     id: 10,
//     hiscode: "001",
//     birthDate: "26/12/2997",
//     name: "Trần Văn A",
//     phoneNumber: "0906587525",
//   },
// ];

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

  const { patients } = props;

  const handleClickPatientInfo = (patientId) => {
    router.push(router.asPath + "/" + patientId + "/profile");
  };

  const handleClickPatientAppointment = (patientId) => {
    router.push(router.asPath + "/" + patientId + "/appointment");
  };

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
              <TableCell size="small" align="center">{t("Info")}</TableCell>
              <TableCell size="small" align="center">{t("Appointment")}</TableCell>
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
                  {row.sex ? <MaleIcon /> : <FemaleIcon />}
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
    </Section>
  );
}

PatientTable.propTypes = {
  patients: PropTypes.array,
};
