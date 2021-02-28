import PropTypes from "prop-types";
import { Table, TableBody, TableCell, TableRow } from "@material-ui/core";

export default function PrescriptionTable(props) {
  const { t } = useTranslation();
  const { prescription } = props;

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>{t("No.")}</TableCell>
          <TableCell>{t("Name")}</TableCell>
          <TableCell>{t("Amount")}</TableCell>
          <TableCell>{t("Unit")}</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {prescription.map((item, index) => (
          <React.Fragment key={index}>
            <TableRow>
              <TableCell>{index}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.amount}</TableCell>
              <TableCell>{item.unit}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={4}>
                {t("Instruction")}: {index.instruction}
              </TableCell>
            </TableRow>
          </React.Fragment>
        ))}
      </TableBody>
    </Table>
  );
}

PrescriptionTable.propTypes = {
  prescription: PropTypes.object,
};
