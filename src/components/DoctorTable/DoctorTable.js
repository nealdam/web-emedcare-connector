import {
  Button,
  Chip,
  InputAdornment,
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@material-ui/core";
import { green, red } from "@material-ui/core/colors";
import { Search } from "@material-ui/icons";
import AddIcon from "@material-ui/icons/Add";
import DisabledIcon from "@material-ui/icons/Close";
import ActiveIcon from "@material-ui/icons/Done";
import InfoIcon from "@material-ui/icons/Info";
import { format, parseISO } from "date-fns";
import PropTypes from "prop-types";
import FemaleIcon from "../../constants/icons/FemaleIcon";
import MaleIcon from "../../constants/icons/MaleIcon";
import { useTranslation } from "../../i18n";
import Section from "../Section";

const useStyle = makeStyles((theme) => ({
  searchBox: {
    marginBottom: theme.spacing(2),
  }
}));

export default function DoctorTable(props) {
  const { handleClickDoctorDetail, handleClickCreateDoctorAccount, doctors, isLoading, isError } = props;
  const { t } = useTranslation();
  const classes = useStyle();

  if (isLoading) return <div>Loading</div>
  if (isError) return <div>Error</div>

  return (
    <Section title={t("Doctor list")}>
      <TextField
        className={classes.searchBox}
        variant="outlined"
        fullWidth
        label={t("Search")}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          ),
        }}
        helperText={`${t("Search")}: ${t("Doctor name")}, ${t(
          "Doctor code"
        )}, ${t("Account")}`}
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
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {doctors.map((row) => (
              <TableRow 
                key={row.id}
              >
                <TableCell>{row.hisCode}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell align="center">
                  {row.gender == 0 ? <FemaleIcon /> : <MaleIcon />}
                </TableCell>
                <TableCell>{format(parseISO(row.birthDate, ), "dd/MM/yyy")}</TableCell>
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
                  {row.account.status.displayName}
                </TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    color="primary"
                    startIcon={<InfoIcon />}
                    onClick={() => handleClickDoctorDetail(row.id)}
                  >
                    {t("Info")}
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Section>
  );
}

DoctorTable.propTypes = {
  doctors: PropTypes.arrayOf(PropTypes.object),
  handleClickDoctorDetail: PropTypes.func,
  handleClickCreateDoctorAccount: PropTypes.func,
};
