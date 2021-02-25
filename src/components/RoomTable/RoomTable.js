import {
  Button,
  Chip,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  makeStyles,
  MenuItem,
  Paper,
  Select,
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
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  chip: {
    marginRight: theme.spacing(1),
  },
  searchBox: {
    // marginBottom: theme.spacing(2),
  },
}));

export default function RoomTable(props) {
  const { t } = useTranslation();
  const classes = useStyles();
  const { handleClickRoomInfo, rooms, isLoading, isError } = props;

  const [selectedRoomStatus, setSelectedRoomStatus] = useState(0);

  if (isLoading) return <div>Loading</div>
  if (isError) return <div>Error</div>

  return (
    <Section title={t("Room list")}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={10}>
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
        </Grid>
        <Grid item xs={12} md={2}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel>{t("Status")}</InputLabel>
            <Select
              value={selectedRoomStatus}
              onChange={(event) => {setSelectedRoomStatus(event.target.value)}}
              label={t("Room status")}
            >
              <MenuItem value={0}>
                <em>{t("All")}</em>
              </MenuItem>
              <MenuItem value={1}>{t("Open")}</MenuItem>
              <MenuItem value={2}>{t("Close")}</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
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
                      <RoomStatus status={room.status} />
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
        </Grid>
      </Grid>
    </Section>
  );
}

RoomTable.propTypes = {
  rooms: PropTypes.array,
  isLoading: PropTypes.bool,
  isError: PropTypes.object,
  handleClickRoomInfo: PropTypes.func,
};
