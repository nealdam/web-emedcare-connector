import {
  Button,
  Chip,
  IconButton,
  InputAdornment,
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
} from "@material-ui/core";
import { Search } from "@material-ui/icons";
import AddIcon from "@material-ui/icons/Add";
import InfoIcon from "@material-ui/icons/Info";
import { format, parseISO } from "date-fns";
import PropTypes from "prop-types";
import FemaleIcon from "../../constants/icons/FemaleIcon";
import MaleIcon from "../../constants/icons/MaleIcon";
import { useTranslation } from "../../i18n";
import Section from "../Section";
import { NO_DATA } from "../../constants/strings";
import { DEFAULT_PAGE_SIZE } from "../../constants/pagingConstant";
import { useState } from "react";
import SexIcon from "../SexIcon/SexIcon";
import SearchBox from "../SearchBox/SearchBox";

const useStyle = makeStyles((theme) => ({
  searchBox: {
    marginBottom: theme.spacing(2),
  },
}));

export default function DoctorTable(props) {
  const {
    handleClickDoctorDetail,
    handleClickCreateDoctorAccount,
    doctors,
    paging,
    isLoading,
    isError,
    setOffset,
    setLimit,
  } = props;
  const { t } = useTranslation();
  const classes = useStyle();

  const [rowsPerPage, setRowsPerPage] = useState(DEFAULT_PAGE_SIZE);
  const [pageOffset, setPageOffset] = useState(0);

  const handleChangePage = (event, offset) => {
    setPageOffset(offset);
    setOffset(offset);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(event.target.value);
    setLimit(event.target.value);
  };

  const handleClickSearch = (searchText) => {};

  if (isLoading) return <div>{t("Loading")}</div>;
  if (isError) return <div>{t("Error")}</div>;

  return (
    <Section title={t("Doctor list")}>
      <SearchBox
        helpText={`${t("Search")}: ${t("Doctor name")}, ${t(
          "Doctor code"
        )}, ${t("Account")}`}
        handleSearch={handleClickSearch}
      />
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>{t("Dr.No")}</TableCell>
              <TableCell>{t("Name")}</TableCell>
              <TableCell align="center">{t("Sex")}</TableCell>
              <TableCell>{t("Birth date")}</TableCell>
              <TableCell>{t("Account")}</TableCell>
              <TableCell>{t("Account status")}</TableCell>
              <TableCell align="center">{t("Info")}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {doctors.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.hisCode}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell align="center">
                  {/* {row.gender == 0 ? <FemaleIcon /> : <MaleIcon />} */}
                  {/* <SexIcon sex={row.gender} /> */}
                  {row.sex ? t("Female") : t("Male")}
                </TableCell>
                <TableCell>
                  {row.birthDate
                    ? format(parseISO(row.birthDate), "dd/MM/yyy")
                    : t(NO_DATA)}
                </TableCell>
                <TableCell>
                  {row.account ? (
                    row.account.email
                  ) : (
                    <Button
                      variant="outlined"
                      color="primary"
                      startIcon={<AddIcon />}
                      onClick={() => handleClickCreateDoctorAccount(row.id)}
                    >
                      {t("Create account")}
                    </Button>
                  )}
                </TableCell>
                <TableCell>
                  {row.account && row.account.status.displayName}
                </TableCell>
                <TableCell align="center">
                  <IconButton color="primary" aria-label={t("Info")}>
                    <InfoIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25, 50]}
        component="div"
        count={paging.totalCount}
        rowsPerPage={rowsPerPage}
        page={pageOffset}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Section>
  );
}

DoctorTable.propTypes = {
  doctors: PropTypes.arrayOf(PropTypes.object),
  handleClickDoctorDetail: PropTypes.func,
  handleClickCreateDoctorAccount: PropTypes.func,
};
