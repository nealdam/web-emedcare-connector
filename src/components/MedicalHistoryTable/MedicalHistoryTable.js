import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";
import PropTypes from 'prop-types'
import { useTranslation } from "../../i18n";

const medicalHistory = [
  { name: "Tim", date: "20/11/2000", status: "none" },
  { name: "Gan", date: "20/11/2000", status: "cured" }
]

export default function MedicalHistoryTable(props) {

  const {t} = useTranslation();

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>{t("Disease name")}</TableCell>
            <TableCell>{t("Disease time")}</TableCell>
            <TableCell>{t("Disease status")}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {medicalHistory.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

MedicalHistoryTable.proptypes = {
  medicalHistory: PropTypes.array
}