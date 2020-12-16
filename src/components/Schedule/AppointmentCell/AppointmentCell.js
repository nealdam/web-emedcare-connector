import {
  Card,
  CardContent,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import PropTypes from "prop-types";
import HisCodeIcon from "../../../constants/icons/HisCodeIcon";
import PatientIcon from "../../../constants/icons/PatientIcon";
import RoomIcon from "../../../constants/icons/RoomIcon";
import { useTranslation } from "../../../i18n";

const useStyle = makeStyles((theme) => ({
  card: {
    cursor: "pointer",
    "&:hover": {
      background: theme.palette.action.hover,
    },
  },
}));

export default function AppointmentCell(props) {
  const { t } = useTranslation();
  const {
    patientName = "Patient Name",
    patientCode = "Patient Code",
    roomNumber = "P001",
  } = props;
  const classes = useStyle();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <PatientIcon />
          </Grid>
          <Grid item xs={10}>
            {patientName}
          </Grid>
          <Grid item xs={2}>
            <HisCodeIcon />
          </Grid>
          <Grid item xs={10}>
            {patientCode}
          </Grid>
          <Grid item xs={2}>
            <RoomIcon />
          </Grid>
          <Grid item xs={10}>
            {roomNumber}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

AppointmentCell.propTypes = {
  patientName: PropTypes.string,
  patientCode: PropTypes.string,
  roomNumber: PropTypes.string,
};
