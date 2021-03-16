import {
  Button,
  IconButton,
  InputAdornment,
  LinearProgress,
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
import PropTypes from "prop-types";
import FemaleIcon from "../../constants/icons/FemaleIcon";
import MaleIcon from "../../constants/icons/MaleIcon";
import { useTranslation } from "../../i18n";
import Section from "../Section";
import InfoIcon from "@material-ui/icons/Info";
import { Search } from "@material-ui/icons";
import { format, parseISO } from "date-fns";
import { DEFAULT_PAGE_SIZE } from "../../constants/pagingConstant";
import { useState } from "react";
import SearchBox from "../SearchBox/SearchBox";
import SexIcon from "../SexIcon/SexIcon";

const useStyles = makeStyles((theme) => ({
  searchBox: {
    marginBottom: theme.spacing(2),
  },
  progressDiv: {
    width: "100%",
    display: "table"
  }
}));

export default function NurseTable(props) {
  const { t } = useTranslation();
  const {
    handleClickNurseProfile,
    nurses,
    paging,
    isLoading,
    isError,
    setOffset,
    setLimit,
  } = props;
  const classes = useStyles();

  const [pageOffset, setPageOffset] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(DEFAULT_PAGE_SIZE);

  const handleChangePage = (event, offset) => {
    setPageOffset(offset);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(event.target.value);
  };

  const handleClickSearch = (event) => {

  }

  if (isLoading) return <div>Loading</div>;
  if (isError) return <div>Error</div>;

  return (
    <Section title={t("Nurse list")}>
      <SearchBox helpText={`${t("Search")}: ${t("Nurse name")}, ${t("Nurse code")}`} handleSearch={handleClickSearch} />
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>{t("Nr.No")}</TableCell>
              <TableCell>{t("Name")}</TableCell>
              <TableCell>{t("Sex")}</TableCell>
              <TableCell>{t("Birth date")}</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {nurses.map((nurse) => (
              <TableRow key={nurse.id}>
                <TableCell>{nurse.hisCode}</TableCell>
                <TableCell>{nurse.name}</TableCell>
                <TableCell>
                  {/* {nurse.gender == 0 ? <MaleIcon /> : <FemaleIcon />} */}
                  <SexIcon sex={nurse.gender} />
                </TableCell>
                <TableCell>
                  {format(parseISO(nurse.birthDate), "dd/MM/yyy")}
                </TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    color="primary"
                    startIcon={<InfoIcon />}
                    onClick={() => handleClickNurseProfile(nurse.id)}
                  >
                    {t("Info")}
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25, 50]}
        component="div"
        count={paging && paging.totalCount}
        rowsPerPage={rowsPerPage}
        page={pageOffset}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Section>
  );
}

NurseTable.propTypes = {
  nurses: PropTypes.arrayOf(PropTypes.object),
  handleClickNurseProfile: PropTypes.func,
};
