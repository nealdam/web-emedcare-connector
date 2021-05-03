import { useTranslation } from "../../../i18n";
import Section from "../../Section";
import PropTypes from "prop-types";
import { Grid, makeStyles, TextField } from "@material-ui/core";
import { toDate } from "../../../utils/datetimeUtil";

const useStyles = makeStyles((theme) => ({
  textField: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  }
}))

export default function NurseInfo(props) {
  const { t } = useTranslation();

  const { nurse } = props;

  const classes = useStyles();

  return (
    <Section title={t("Nurse info")}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={3} md={2}>
          <img
            src="https://via.placeholder.com/150x200"
            alt="profile picture"
            width="100%"
          />
        </Grid>
        <Grid item xs={12} sm={9} md={10}>
          <TextField
            className={classes.textField}
            variant="outlined"
            fullWidth
            label={t("Nurse code")}
            value={nurse.hisCode}
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            className={classes.textField}
            variant="outlined"
            fullWidth
            label={t("Name")}
            value={nurse.name}
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            className={classes.textField}
            variant="outlined"
            fullWidth
            label={t("Sex")}
            value={nurse.sex ? t("Female") : t("Male")}
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            className={classes.textField}
            variant="outlined"
            fullWidth
            label={t("Birth date")}
            value={nurse.birthDate && toDate(nurse.birthDate)}
            InputProps={{
              readOnly: true,
            }}
          />
          {/* <TextField
            className={classes.textField}
            variant="outlined"
            fullWidth
            label={t("Phone number")}
            value={nurse.phoneNumber}
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            className={classes.textField}
            variant="outlined"
            fullWidth
            label={t("Address")}
            value={nurse.address}
            InputProps={{
              readOnly: true,
            }}
          /> */}
        </Grid>
      </Grid>
    </Section>
  );
}

NurseInfo.propTypes = {
  nurse: PropTypes.object,
};
