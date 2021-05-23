import { makeStyles, TextField } from "@material-ui/core";
import PropTypes from "prop-types";
import { useTranslation } from "../../../i18n";
import Section from "../../Section/Section";
import PrescriptionTable from "./PrescriptionTable";

const useStyles = makeStyles((theme) => ({
  textField: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

export default function AppointmentResult(props) {
  const classes = useStyles();
  const { result } = props;
  const { t } = useTranslation();

  return (
    <Section title={t("Appointment result")}>
      {result ? (
        <>
          <TextField
            className={classes.textField}
            variant="outlined"
            fullWidth
            label={t("Diagnosis")}
            value={result.result}
            InputProps={{
              readOnly: true,
            }}
          />
          {/* <PrescriptionTable prescription={result.prescription} /> */}
          <TextField
            className={classes.textField}
            variant="outlined"
            fullWidth
            label={t("Advice")}
            value={result.reminder}
            InputProps={{
              readOnly: true,
            }}
          />{" "}
        </>
      ) : (
        <div>No result</div>
      )}
    </Section>
  );
}

AppointmentResult.propTypes = {
  result: PropTypes.object,
};
