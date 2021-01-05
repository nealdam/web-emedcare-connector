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
import { useTranslation } from "../../i18n";
import Section from "../Section";
import PropTypes from "prop-types";
import RoomStatus from "./RoomStatus";
import { Info, Search } from "@material-ui/icons";

// const rooms = [
//   {
//     id: 1,
//     number: "001",
//     name: "Nhi 1",
//     specialist: ["Tai, mũi, họng", "Nhi", "Chấn thương chỉnh hình"],
//     status: "Open",
//   },
//   {
//     id: 2,
//     number: "001",
//     name: "Nhi 1",
//     specialist: ["Tai, mũi, họng", "Nhi", "Chấn thương chỉnh hình"],
//     status: "Open",
//   },
//   {
//     id: 3,
//     number: "001",
//     name: "Nhi 1",
//     specialist: ["Tai, mũi, họng", "Nhi", "Chấn thương chỉnh hình"],
//     status: "Open",
//   },
//   {
//     id: 4,
//     number: "001",
//     name: "Nhi 1",
//     specialist: ["Tai, mũi, họng", "Nhi", "Chấn thương chỉnh hình"],
//     status: "Open",
//   },
//   {
//     id: 5,
//     number: "001",
//     name: "Nhi 1",
//     specialist: ["Tai, mũi, họng", "Nhi", "Chấn thương chỉnh hình"],
//     status: "Open",
//   },
//   {
//     id: 6,
//     number: "001",
//     name: "Nhi 1",
//     specialist: ["Tai, mũi, họng", "Nhi", "Chấn thương chỉnh hình"],
//     status: "Open",
//   },
//   {
//     id: 7,
//     number: "001",
//     name: "Nhi 1",
//     specialist: ["Tai, mũi, họng", "Nhi", "Chấn thương chỉnh hình"],
//     status: "Close",
//   },
//   {
//     id: 8,
//     number: "001",
//     name: "Nhi 1",
//     specialist: ["Tai, mũi, họng", "Nhi", "Chấn thương chỉnh hình"],
//     status: "Open",
//   },
//   {
//     id: 9,
//     number: "001",
//     name: "Nhi 1",
//     specialist: ["Tai, mũi, họng", "Nhi", "Chấn thương chỉnh hình"],
//     status: "Open",
//   },
//   {
//     id: 10,
//     number: "001",
//     name: "Nhi 1",
//     specialist: ["Tai, mũi, họng", "Nhi", "Chấn thương chỉnh hình"],
//     status: "Open",
//   },
// ];

const useStyles = makeStyles((theme) => ({
  chip: {
    marginRight: theme.spacing(1),
  },
  searchBox: {
    marginBottom: theme.spacing(2),
  }
}));

export default function RoomTable(props) {
  const { t } = useTranslation();
  const classes = useStyles();
  const { handleClickRoomInfo, rooms } = props;

  return (
    <Section title={t("Room list")}>
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
        helperText={`${t("Search")}: ${t("Room name")}, ${t("Room code")}`}
      />
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>{t("Room number")}</TableCell>
              <TableCell>{t("Name")}</TableCell>
              <TableCell>{t("Specialist")}</TableCell>
              <TableCell>{t("Status")}</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rooms.map((room) => (
              <TableRow key={room.id}>
                <TableCell>{room.number}</TableCell>
                <TableCell>{room.hisCode}</TableCell>
                <TableCell>
                  {room.specialties.map((specialty, index) => (
                    <Chip
                      className={classes.chip}
                      key={index}
                      label={specialty.name}
                    />
                  ))}
                </TableCell>
                <TableCell>
                  <RoomStatus status={room.isAvailable} />
                </TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    color="primary"
                    startIcon={<Info />}
                    onClick={() => handleClickRoomInfo(room.id)}
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

RoomTable.propTypes = {
  rooms: PropTypes.array,
  handleClickRoomInfo: PropTypes.func,
};
