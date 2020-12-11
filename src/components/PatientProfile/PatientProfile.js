import {
  Container,
  Divider,
  Grid,
  makeStyles,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import { useTranslation } from "../../i18n";
import MedicalHistoryTable from "../MedicalHistoryTable";
import PropTypes from 'prop-types';

const patientProfile = {
  name: "Trần Văn A",
  gender: "Nam",
  phoneNumber: "0906585245",
  address: "101 Độc Lập, P.Tân Thành, Q.Tân Phú, Tp.HCM",
};

const useStyle = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
  },
  imgDiv: {
    width: "100%",
    // padding: theme.spacing(1),
  },
  img: {
    // margin: "auto",
    // marginTop: theme.spacing(1),
    width: "100%"
  },
  textField: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  title: {
    marginBottom: theme.spacing(1),
  },
}));

export default function PatientProfile() {
  const { t } = useTranslation();
  const classes = useStyle();

  return (
    <Paper className={classes.paper}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h4" component="h5" className={classes.title}>
            {t("Patient info")}
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={3} md={2}>
              {/* <Container> */}
                <img
                  src="https://via.placeholder.com/150x200"
                  alt="profile picture"
                  className={classes.img}
                />
              {/* </Container> */}
            </Grid>
            <Grid item xs={12} sm={9} md={10}>
              <TextField
                className={classes.textField}
                id="patientName"
                variant="outlined"
                fullWidth
                label={t("Name")}
                value={patientProfile.name}
                InputProps={{
                  readOnly: true,
                }}
              />
              <TextField
                className={classes.textField}
                id="patientGender"
                variant="outlined"
                fullWidth
                label={t("Gender")}
                value={patientProfile.gender}
                InputProps={{
                  readOnly: true,
                }}
              />
              <TextField
                className={classes.textField}
                id="patientPhoneNumber"
                variant="outlined"
                fullWidth
                label={t("Phone number")}
                value={patientProfile.phoneNumber}
                InputProps={{
                  readOnly: true,
                }}
              />
              <TextField
                className={classes.textField}
                id="patientAddress"
                variant="outlined"
                fullWidth
                label={t("Address")}
                value={patientProfile.address}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h4" component="h5" className={classes.title}>
            {t("Medical history")}
          </Typography>
          <MedicalHistoryTable />
        </Grid>
      </Grid>
    </Paper>
  );
}

PatientProfile.propTypes = {
  patientProfile: PropTypes.object
}