import {
  Paper,
  Table,
  TableContainer,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  Chip,
  colors,
} from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import { useTranslation } from "../../i18n";
import PropTypes from 'prop-types';

const appointments = [
  { id: 1, room: "P.001", doctor: "Nguyễn Văn A", date: "20/02/2020", shift: "08:00 AM - 11:00 AM", block: "A - 08:00 AM", specialist: "Tai, mũi, họng", status: "Overdue" },
  { id: 1, room: "P.001", doctor: "Nguyễn Văn A", date: "21/02/2020", shift: "08:00 AM - 11:00 AM", block: "A - 08:00 AM", specialist: "Tai, mũi, họng", status: "Done" },
  { id: 1, room: "P.001", doctor: "Nguyễn Văn A", date: "22/02/2020", shift: "08:00 AM - 11:00 AM", block: "A - 08:00 AM", specialist: "Tai, mũi, họng", status: "Checked-in" },
  { id: 1, room: "P.001", doctor: "Nguyễn Văn A", date: "23/02/2020", shift: "08:00 AM - 11:00 AM", block: "A - 08:00 AM", specialist: "Tai, mũi, họng", status: "Upcoming" }
]



export default function PatientAppointmentTable() {
  const { t } = useTranslation();

  return (
    <div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>{t("Room")}</TableCell>
              <TableCell>{t("Doctor")}</TableCell>
              <TableCell>{t("Date")}</TableCell>
              <TableCell>{t("Shift")}</TableCell>
              <TableCell>{t("Block")}</TableCell>
              <TableCell>{t("Specialist")}</TableCell>
              <TableCell>{t("Status")}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {appointments.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.room}</TableCell>
                <TableCell>{row.doctor}</TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.shift}</TableCell>
                <TableCell>{row.block}</TableCell>
                <TableCell>{row.specialist}</TableCell>
                <TableCell>
                  {
                    row.status == "Overdue"
                    ? <Chip label="Overdue" color="primary" style={{backgroundColor: colors.red[500]}} />
                    : row.status == "Done"
                      ? <Chip label="Done" />
                      : row.status == "Checked-in"
                        ? <Chip label="Checked-in" color="primary" style={{backgroundColor: colors.green[500]}} />
                        : <Chip label="Upcoming" color="primary" style={{backgroundColor: colors.blue[500]}} />
                  }
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

PatientAppointmentTable.propTypes = {
  appointments: PropTypes.array,
}