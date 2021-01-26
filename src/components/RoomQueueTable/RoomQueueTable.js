import { Button, FormControl, Grid, InputLabel, makeStyles, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@material-ui/core";
import PropTypes from "prop-types";
import { useState } from "react";
import { useTranslation } from "../../i18n";
import SearchBox from "../SearchBox";
import Section from "../Section/Section";

const roomList = [
  {
    id: 1,
    name: "CS1",
    rooms: [
      {
        id: 1,
        number: "001",
        name: "Nhi 1",
        patients: [
          {
            id: 1,
            name: "Nguyen Van A",
            number: "12A"
          },
          {
            id: 2,
            name: "Nguyen Van B",
            number: "12A"
          },
          {
            id: 3,
            name: "Nguyen Van C",
            number: "12A"
          },
          {
            id: 4,
            name: "Nguyen Van D",
            number: "12A"
          },
          {
            id: 5,
            name: "Nguyen Van E",
            number: "12A"
          },
        ]
      },
      {
        id: 2,
        number: "002",
        name: "Nhi 2",
        patients: [
          {
            id: 1,
            name: "Nguyen Van A",
            number: "12A"
          },
          {
            id: 2,
            name: "Nguyen Van B",
            number: "12A"
          },
          {
            id: 3,
            name: "Nguyen Van C",
            number: "12A"
          },
          {
            id: 4,
            name: "Nguyen Van D",
            number: "12A"
          },
          {
            id: 5,
            name: "Nguyen Van E",
            number: "12A"
          },
        ]
      },
      
    ]
  }
]

const useStyles = makeStyles((theme) => ({
  searchBox: {
    // marginBottom: theme.spacing(2),
  },
  roomNumberCell: {
    maxWidth: 200
  }
}));

export default function RoomQueueTable(props) {
  const classes = useStyles();
  const { t } = useTranslation();

  const [selectedFacility, setSelectedFacility] = useState(0);

  return (
    <Section title={t("Room list")}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={10}>
          <SearchBox
            helpText={`${t("Search")}: ${t("Room number")}, ${t("Room name")}`}
          />
        </Grid>
        <Grid item xs={12} md={2}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel>{t("Facility")}</InputLabel>
            <Select
              value={selectedFacility}
              onChange={(event) => {
                setSelectedFacility(event.target.value);
              }}
              label={t("Facility")}
            >
              <MenuItem value={0}>
                <em>{t("All")}</em>
              </MenuItem>
              {roomList.map((facility) => (
                <MenuItem key={facility.id} value={facility.id}>
                  {facility.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}> {/* room queue */}
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell width={150}>{t("Room number")}</TableCell>
                  <TableCell>{t("Room name")}</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {roomList[0].rooms.map((room) => (
                  <TableRow key={room.id}>
                    <TableCell>{room.number}</TableCell>
                    <TableCell>{room.name}</TableCell>
                    <TableCell>
                      <Button variant="outlined" color="primary">
                        {t("Queue")}
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

RoomQueueTable.propTypes = {
  rooms: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.number,
      PropTypes.string,
      PropTypes.arrayOf(
        PropTypes.objectOf(
          PropTypes.number,
          PropTypes.string,
          PropTypes.arrayOf(
            PropTypes.objectOf(
              PropTypes.number,
              PropTypes.string,
              PropTypes.string
            )
          )
        )
      )
    )
  ),
};
