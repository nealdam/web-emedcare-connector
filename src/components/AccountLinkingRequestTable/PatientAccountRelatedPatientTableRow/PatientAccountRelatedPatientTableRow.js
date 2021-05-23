import {
  Box,
  Button,
  Chip,
  Collapse,
  colors,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { useTranslation } from "../../../i18n";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { toDate } from "../../../utils/datetimeUtil";
import { parse, parseISO } from "date-fns";
import { useState } from "react";
import ColorChip from "../../ColorChip/ColorChip";

export default function PatientAccountRelatedPatientTableRow(props) {
  const { profile, colSpan, handleClickDetail } = props;
  const { t } = useTranslation();

  const [open, setOpen] = useState(false);

  return (
    <>
      <TableRow>
        <TableCell>
          <IconButton size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell>{profile.name}</TableCell>
        {/* <TableCell>{toDate(parseISO(profile.birthDate))}</TableCell> */}
        <TableCell>{profile.email}</TableCell>
        <TableCell>{profile.phoneNumber}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell
          style={{ paddingBottom: 0, paddingTop: 0 }}
          colSpan={colSpan}
        >
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>{t("Name")}</TableCell>
                    <TableCell>{t("Birth date")}</TableCell>
                    <TableCell>{t("Relationship")}</TableCell>
                    <TableCell>{t("Status")}</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {profile.patients.map((patient) => patient && (
                    <TableRow key={patient.id}>
                      <TableCell>{patient.name}</TableCell>
                      <TableCell>
                        {/* {toDate(parseISO(patient.birthDate))} */}
                      </TableCell>
                      <TableCell>{patient.calledBy == "Owner" ? t("Owner") : patient.calledBy}</TableCell>
                      <TableCell>
                        {patient.isConnected ? (
                          <ColorChip label={t("Linked")} />
                        ) : (
                          <ColorChip label={t("Not linked")} variant='error' />
                        )}
                      </TableCell>
                      <TableCell>
                        <Button variant="outlined" color="primary" onClick={() => handleClickDetail(profile.id, patient.id, patient.calledBy == "Owner")} >
                          {t("Info")}
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}
