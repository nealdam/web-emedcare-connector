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

const linkingRequests = [
  {
    id: 1,
    name: "Nguyen Van A",
    birthDate: "08/10/1997",
    phoneNumber: "0906469459",
    profileRelationship: "Chính chủ",
    status: true,
  },
  {
    id: 1,
    name: "Nguyen Van A",
    birthDate: "08/10/1997",
    phoneNumber: "0906469459",
    profileRelationship: "Cha",
    status: false,
  },
  {
    id: 1,
    name: "Nguyen Van A",
    birthDate: "08/10/1997",
    phoneNumber: "0906469459",
    profileRelationship: "Mẹ",
    status: false,
  },
  {
    id: 1,
    name: "Nguyen Van A",
    birthDate: "08/10/1997",
    phoneNumber: "0906469459",
    profileRelationship: "Bác",
    status: false,
  },
  {
    id: 1,
    name: "Nguyen Van A",
    birthDate: "08/10/1997",
    phoneNumber: "0906469459",
    profileRelationship: "Thím",
    status: false,
  },
];

export default function AccountLinkingRequestTable(props) {
  const { t } = useTranslation();
  // const { linkingRequests } = props;

  const [isRequestDetailOpen, setIsRequestDetailOpen] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState();

  const handleLinking = () => {
    return;
  }

  const handleClickDetail = () => {
    setSelectedRequest();
    setIsRequestDetailOpen(true);
  }

  return (
    <div>
      <Section title={t("Account linking request list")}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <SearchBox
              helpText={`${t("Search")}: ${t("Patient name")}, ${t(
                "Patient phone number"
              )}`}
            />
          </Grid>
          <Grid item xs={12}>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>{t("Name")}</TableCell>
                    <TableCell>{t("Birth date")}</TableCell>
                    <TableCell>{t("Phone number")}</TableCell>
                    <TableCell>{t("Connect to")}</TableCell>
                    <TableCell>{t("Status")}</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {linkingRequests.map((request) => (
                    <TableRow key={request.id}>
                      <TableCell>{request.name}</TableCell>
                      <TableCell>{request.birthDate}</TableCell>
                      <TableCell>{request.phoneNumber}</TableCell>
                      <TableCell>{request.profileRelationship}</TableCell>
                      <TableCell>
                        {request.status ? (
                          <Chip label={t("Linked")} />
                        ) : (
                          <Chip
                            label={t("Not linked")}
                            color="primary"
                            style={{ backgroundColor: colors.red[500] }}
                          />
                        )}
                      </TableCell>
                      <TableCell>
                        <Button variant="outlined" color="primary" onClick={handleClickDetail}>
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
      <AccountLinkingRequestDetailDialog isOpen={isRequestDetailOpen} handleClose={() => {setIsRequestDetailOpen(false)}} handleLink={handleLinking} />
    </div>
  );
}

AccountLinkingRequestTable.propTypes = {
  linkingProfiles: PropTypes.arrayOf(PropTypes.object),
};
