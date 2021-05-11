import PropTypes from "prop-types";
import {
  Grid,
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
import { useState } from "react";
import { DEFAULT_PAGE_SIZE } from "../../constants/pagingConstant";
import { useTranslation } from "../../i18n";
import Section from "../Section";
import InfoIcon from "@material-ui/icons/Info";

const useStyles = makeStyles((theme) => ({}));

export default function MedicalDeclarationTable(props) {
  const classes = useStyles();
  const { t } = useTranslation();

  const {
    declarations,
    paging,
    isLoading,
    isError,
    setOffset,
    setLimit,
    handleClickMedicalDeclarationDetail,
    handleSetTemperature,
  } = props;

  const [pageOffset, setPageOffset] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(DEFAULT_PAGE_SIZE);

  const handleChangePage = (event, offset) => {
    setPageOffset(offset);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(event.target.value);
  };

  const handleClickSearch = (event) => {};

  if (isLoading) return <div>{t("Loading")}</div>;
  if (isError) return <div>{t("Error")}</div>;

  return (
    <Section title={t("Health declaration")}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={10}>
          {/* date time */}
        </Grid>
        <Grid item xs={12} md={10}>
          {/* search box */}
        </Grid>
        <Grid item xs={12}>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableCell>{t("Patient name")}</TableCell>
                <TableCell>{t("Sex")}</TableCell>
                <TableCell>{t("Birth year")}</TableCell>
                <TableCell>{t("Phone number")}</TableCell>
                <TableCell>{t("Temperature")} (&#8451;)</TableCell>
                <TableCell>{t("Yes answer")}</TableCell>
                <TableCell>{t("Info")}</TableCell>
              </TableHead>
              <TableBody>
                {declarations.map((declaration) => (
                  <TableRow key={declaration.id}>
                    <TableCell>{declaration.patientName}</TableCell>
                    <TableCell>
                      {declaration.sex ? t("Female") : t("Male")}
                    </TableCell>
                    <TableCell>{declaration.birthYear}</TableCell>
                    <TableCell>{declaration.phoneNumber}</TableCell>
                    <TableCell>
                      {declaration.temperature
                        ? declaration.temperature
                        : t("No data")}
                    </TableCell>
                    <TableCell>{declaration.yesAnswersOnTotal}</TableCell>
                    <TableCell>
                      <IconButton
                        color="primary"
                        aria-label={t("Info")}
                        onClick={() =>
                          handleClickMedicalDeclarationDetail(declaration.id)
                        }
                      >
                        <InfoIcon />
                      </IconButton>
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

MedicalDeclarationTable.propTypes = {
  declarations: PropTypes.array,
  paging: PropTypes.object,
  isLoading: PropTypes.bool,
  isError: PropTypes.object,
  setOffset: PropTypes.func,
  setLimit: PropTypes.func,
  handleClickMedicalDeclarationDetail: PropTypes.func,
};
