import {
  Button,
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
import PropTypes from "prop-types";
import FemaleIcon from "../../constants/icons/FemaleIcon";
import MaleIcon from "../../constants/icons/MaleIcon";
import { useTranslation } from "../../i18n";
import Section from "../Section";
import InfoIcon from "@material-ui/icons/Info";
import { Search } from "@material-ui/icons";

const nurses = [
  {
    id: 1,
    hisCode: "001",
    name: "Nguyễn Thị B",
    sex: 1,
    birthDate: "13/02/1888",
  },
  {
    id: 2,
    hisCode: "001",
    name: "Nguyễn Thị B",
    sex: 1,
    birthDate: "13/02/1888",
  },
  {
    id: 3,
    hisCode: "001",
    name: "Nguyễn Thị B",
    sex: 1,
    birthDate: "13/02/1888",
  },
  {
    id: 4,
    hisCode: "001",
    name: "Nguyễn Thị B",
    sex: 0,
    birthDate: "13/02/1888",
  },
  {
    id: 5,
    hisCode: "001",
    name: "Nguyễn Thị B",
    sex: 1,
    birthDate: "13/02/1888",
  },
  {
    id: 6,
    hisCode: "001",
    name: "Nguyễn Thị B",
    sex: 1,
    birthDate: "13/02/1888",
  },
  {
    id: 7,
    hisCode: "001",
    name: "Nguyễn Thị B",
    sex: 0,
    birthDate: "13/02/1888",
  },
  {
    id: 8,
    hisCode: "001",
    name: "Nguyễn Thị B",
    sex: 1,
    birthDate: "13/02/1888",
  },
  {
    id: 9,
    hisCode: "001",
    name: "Nguyễn Thị B",
    sex: 1,
    birthDate: "13/02/1888",
  },
  {
    id: 10,
    hisCode: "001",
    name: "Nguyễn Thị B",
    sex: 1,
    birthDate: "13/02/1888",
  },
];

const useStyles = makeStyles((theme) => ({
  searchBox: {
    marginBottom: theme.spacing(2),
  }
}))

export default function NurseTable(props) {
  const { t } = useTranslation();
  const { handleClickNurseProfile } = props;
  const classes = useStyles();

  return (
    <Section title={t("Nurse list")}>
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
        helperText={`${t("Search")}: ${t("Nurse name")}, ${t(
          "Nurse code"
        )}`}
      />
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
                  {nurse.sex == 0 ? <MaleIcon /> : <FemaleIcon />}
                </TableCell>
                <TableCell>{nurse.birthDate}</TableCell>
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
    </Section>
  );
}

NurseTable.propTypes = {
  nurses: PropTypes.arrayOf(PropTypes.object),
  handleClickNurseProfile: PropTypes.func,
};
