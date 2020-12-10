import {
  IconButton,
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import InfoIcon from "@material-ui/icons/Info";
import AppointmentIcon from "@material-ui/icons/CalendarToday";
import { useTranslation } from "../../i18n";

const patients = [
  { hiscode: "001", name: "Trần Văn A", phoneNumber: "0906587525" },
  { hiscode: "001", name: "Trần Văn A", phoneNumber: "0906587525" },
  { hiscode: "001", name: "Trần Văn A", phoneNumber: "0906587525" },
  { hiscode: "001", name: "Trần Văn A", phoneNumber: "0906587525" },
  { hiscode: "001", name: "Trần Văn A", phoneNumber: "0906587525" },
  { hiscode: "001", name: "Trần Văn A", phoneNumber: "0906587525" },
  { hiscode: "001", name: "Trần Văn A", phoneNumber: "0906587525" },
  { hiscode: "001", name: "Trần Văn A", phoneNumber: "0906587525" },
  { hiscode: "001", name: "Trần Văn A", phoneNumber: "0906587525" },
  { hiscode: "001", name: "Trần Văn A", phoneNumber: "0906587525" },
];

const useStyle = makeStyles((theme) => ({
  actionCell: {
    maxWidth: 100
  }
}))

export default function PatientTable() {
  const { t } = useTranslation();
  const classes = useStyle();

  return (
    <TableContainer component={Paper}>
      <Table aria-label="Patient table">
        <TableHead>
          <TableRow>
            <TableCell>{t("Pt.No")}</TableCell>
            <TableCell>{t("Name")}</TableCell>
            <TableCell>{t("Phone number")}</TableCell>
            <TableCell size="small"></TableCell>
            <TableCell size="small"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {patients.map((row) => (
            <TableRow key={row.hiscode}>
              <TableCell>{row.hiscode}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.phoneNumber}</TableCell>
              <TableCell>
                <IconButton
                  color="primary"
                  aria-label="Patient info"
                  component="span"
                >
                  <InfoIcon />
                </IconButton>
              </TableCell>
              <TableCell>
                <IconButton
                  color="primary"
                  aria-label="Patient appointment"
                  component="span"
                >
                  <AppointmentIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
