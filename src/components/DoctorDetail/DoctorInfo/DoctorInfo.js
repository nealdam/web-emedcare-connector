import { Grid, makeStyles, TextField } from "@material-ui/core";
import PropTypes from "prop-types";
import { useTranslation } from "../../../i18n";
import { toDate } from "../../../utils/datetimeUtil";
import Section from "../../Section";

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
}));

export default function DoctorInfo(props) {
  const classes = useStyle();
  const { t } = useTranslation();

  const { doctor } = props;

  return (
    <Section title={t("Doctor info")}>
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
            label={t("Doctor code")}
            value={doctor.hisCode}
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            className={classes.textField}
            variant="outlined"
            fullWidth
            label={t("Name")}
            value={doctor.name}
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            className={classes.textField}
            variant="outlined"
            fullWidth
            label={t("Sex")}
            value={doctor.sex ? t("Female") : t("Male")}
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            className={classes.textField}
            variant="outlined"
            fullWidth
            label={t("Birth date")}
            value={toDate(doctor.birthDate)}
            InputProps={{
              readOnly: true,
            }}
          />
        </Grid>
      </Grid>
    </Section>
  );
}

DoctorInfo.propTypes = {
  doctor: PropTypes.object,
};
