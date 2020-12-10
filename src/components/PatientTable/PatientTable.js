import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";
import { useTranslation } from "../../i18n";

const patients = [
  { hiscode: "001", name: "Trần Văn A", phoneNumber: "0906587525"},
  { hiscode: "001", name: "Trần Văn A", phoneNumber: "0906587525"},
  { hiscode: "001", name: "Trần Văn A", phoneNumber: "0906587525"},
  { hiscode: "001", name: "Trần Văn A", phoneNumber: "0906587525"},
  { hiscode: "001", name: "Trần Văn A", phoneNumber: "0906587525"},
  { hiscode: "001", name: "Trần Văn A", phoneNumber: "0906587525"},
  { hiscode: "001", name: "Trần Văn A", phoneNumber: "0906587525"},
  { hiscode: "001", name: "Trần Văn A", phoneNumber: "0906587525"},
  { hiscode: "001", name: "Trần Văn A", phoneNumber: "0906587525"},
  { hiscode: "001", name: "Trần Văn A", phoneNumber: "0906587525"},
]

export default function PatientTable() {

  const {t} = useTranslation();


  return (
    <TableContainer component={Paper}>
      <Table aria-label="Patient table">
        <TableHead>
          <TableRow>
            <TableCell>{t("Pt.No")}</TableCell>
            <TableCell>{t("Name")}</TableCell>
            <TableCell>{t("Phone number")}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {patients.map((row) => (
            <TableRow key={row.hiscode}>
              <TableCell>{row.hiscode}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.phoneNumber}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

