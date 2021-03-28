import {
  Button,
  Chip,
  colors,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { useTranslation } from "../../i18n";
import SearchBox from "../SearchBox/SearchBox";
import Section from "../Section/Section";
import PropTypes from "prop-types";
import AccountLinkingRequestDetailDialog from "./AccountLinkingRequestDetailDialog";
import { useState } from "react";
import PatientAccountRelatedPatientTableRow from "./PatientAccountRelatedPatientTableRow/PatientAccountRelatedPatientTableRow";

export default function AccountLinkingRequestTable(props) {
  const { t } = useTranslation();
  const { profiles, isLoading, isError, handleSearch, handleClickDetail } = props;
  const [selectedRequest, setSelectedRequest] = useState();

  if (isLoading) return <div>Loading</div>
  if (isError) return <div>Error</div>

  return (
    <div>
      <Section title={t("Account linking request list")}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <SearchBox
              helpText={`${t("Search")}: ${t("Patient name")}, ${t(
                "Patient phone number"
              )}`}
              handleSearch={handleSearch}
            />
          </Grid>
          <Grid item xs={12}>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell></TableCell>
                    <TableCell>{t("Name")}</TableCell>
                    <TableCell>{t("Email")}</TableCell>
                    <TableCell>{t("Phone number")}</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {profiles.map((profile) => (
                    <PatientAccountRelatedPatientTableRow profile={profile} colSpan={4} key={profile.id} handleClickDetail={handleClickDetail} />
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </Section>
    </div>
  );
}

AccountLinkingRequestTable.propTypes = {
  profiles: PropTypes.arrayOf(PropTypes.object),
  isLoading: PropTypes.bool,
  isError: PropTypes.bool,
  handleSearch: PropTypes.func,
};
