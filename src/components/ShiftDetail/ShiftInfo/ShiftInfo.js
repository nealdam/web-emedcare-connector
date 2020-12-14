import { useTranslation } from "../../../i18n";
import Section from "../../Section/Section";
import PropTypes from "prop-types";
import { makeStyles, TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  textField: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  }
}))

export default function ShiftInfo(props) {
  const { shiftInfo } = props;
  const classes = useStyles();

  const { t } = useTranslation();

  return (
    <Section title={t("Shift info")}>
      <TextField
        className={classes.textField}
        variant="outlined"
        fullWidth
        label={t("Start time")}
        value={shiftInfo.startedAt}
        InputProps={{
          readOnly: true,
        }}
      />
      <TextField
        className={classes.textField}
        variant="outlined"
        fullWidth
        label={t("End time")}
        value={shiftInfo.endedAt}
        InputProps={{
          readOnly: true,
        }}
      />
    </Section>
  );
}

ShiftInfo.propTypes = {
  shiftInfo: PropTypes.object,
};
