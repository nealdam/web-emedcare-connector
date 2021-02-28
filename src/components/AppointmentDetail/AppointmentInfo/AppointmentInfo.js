import { LinearProgress, makeStyles, TextField } from "@material-ui/core";
import PropTypes from "prop-types";
import { useTranslation } from "../../../i18n";
import Section from "../../Section";

const useStyles = makeStyles((theme) => ({
  textField: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

export default function AppointmentInfo(props) {
  const classes = useStyles();
  const { t } = useTranslation();
  const { appointment, isLoading, isError } = props;

  return (
    <Section title={t("Appointment info")}>
      {isLoading && <LinearProgress />}
      {isError && <div>Error</div>}
      {appointment && (
        <>
          <TextField
            className={classes.textField}
            variant="outlined"
            fullWidth
            label={t("Status")}
            value={appointment.status.displayName}
            InputProps={{
              readOnly: true,
            }}
          />
        </>
      )}
    </Section>
  );
}

AppointmentInfo.propTypes = {
  appointment: PropTypes.object,
  isLoading: PropTypes.func,
  isError: PropTypes.object,
};
