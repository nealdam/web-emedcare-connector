import {
  Button,
  FormControl,
  Grid,
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
  TablePagination,
  TableRow,
  TextField,
} from "@material-ui/core";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import { useState } from "react";
import { DEFAULT_PAGE_SIZE, DEFAULT_PAGE_SIZE_OPTIONS } from "../../constants/pagingConstant";
import { useTranslation } from "../../i18n";
import SearchBox from "../SearchBox";
import Section from "../Section/Section";

const useStyles = makeStyles((theme) => ({
  searchBox: {
    // marginBottom: theme.spacing(2),
  },
  roomNumberCell: {
    maxWidth: 200,
  },
}));

export default function RoomQueueTable(props) {
  const classes = useStyles();
  const { t } = useTranslation();
  const { rooms, paging, isLoading, isError, setOffset, setLimit } = props;
  const router = useRouter();

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

  const handleRoomClick = (id) => {
    router.push(router.pathname + "/" + id);
  };

  if (isLoading) return <div>{t("Loading")}</div>;
  if (isError) return <div>{t("Error")}</div>;

  return (
    <Section title={t("Room list")}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <SearchBox
            helpText={`${t("Search")}: ${t("Room number")}, ${t("Room name")}`}
          />
        </Grid>
        <Grid item xs={12}>
          {" "}
          {/* room queue */}
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
                {rooms.map((room) => (
                  <TableRow key={room.id}>
                    <TableCell>{room.number}</TableCell>
                    <TableCell>{room.name}</TableCell>
                    <TableCell>
                      <Button
                        variant="outlined"
                        color="primary"
                        onClick={() => handleRoomClick(room.id)}
                      >
                        {t("Queue")}
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={DEFAULT_PAGE_SIZE_OPTIONS}
            component="div"
            count={paging.totalCount}
            rowsPerPage={rowsPerPage}
            page={pageOffset}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
            labelRowsPerPage={t("Rooms per page")}
          />
        </Grid>
      </Grid>
    </Section>
  );
}

RoomQueueTable.propTypes = {
  rooms: PropTypes.array,
  paging: PropTypes.object,
  isLoading: PropTypes.bool,
  isError: PropTypes.object,
  setOffset: PropTypes.func,
  setLimit: PropTypes.func,
};
