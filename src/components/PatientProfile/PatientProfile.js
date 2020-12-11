import {
  Grid,
  makeStyles,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import PropTypes from "prop-types";
import { useTranslation } from "../../i18n";
import MedicalHistoryTable from "../MedicalHistoryTable";
import SectionTitle from "../SectionTitle";

const patientProfile = {
  id: 1,
  hisCode: "001",
  name: "Trần Văn A",
  sex: "Nam",
  phoneNumber: "0906585245",
  address: "101 Độc Lập, P.Tân Thành, Q.Tân Phú, Tp.HCM",
};

const useStyle = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
  },
  img: {
    width: "100%",
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
    // <Paper className={classes.paper}>
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <SectionTitle title={t("Patient info")} />
          <Grid container spacing={2}>
            <Grid item xs={12} sm={3} md={2}>
              <img
                src="https://via.placeholder.com/150x200"
                alt="profile picture"
                className={classes.img}
              />
            </Grid>
            <Grid item xs={12} sm={9} md={10}>
              <TextField
                className={classes.textField}
                variant="outlined"
                fullWidth
                label={t("Patient code")}
                value={patientProfile.hisCode}
                InputProps={{
                  readOnly: true,
                }}
              />
              <TextField
                className={classes.textField}
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
                variant="outlined"
                fullWidth
                label={t("Sex")}
                value={patientProfile.sex}
                InputProps={{
                  readOnly: true,
                }}
              />
              <TextField
                className={classes.textField}
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
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <SectionTitle title={t("Medical history")} />
          <MedicalHistoryTable />
        </Paper>
      </Grid>
    </Grid>
    // </Paper>
  );
}

PatientProfile.propTypes = {
  patientProfile: PropTypes.object,
};
