import { makeStyles, TextField } from "@material-ui/core";
import PropTypes from "prop-types";
import { useTranslation } from "../../../i18n";
import Section from "../../Section";

const useStyles = makeStyles((theme) => ({
  textField: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

export default function BookerInfo(props) {
  const classes = useStyles();
  const { t } = useTranslation();
  const { booker } = props;

  return (
    <Section title={t("Booker info")}>
      <TextField
        className={classes.textField}
        variant="outlined"
        fullWidth
        label={t("Name")}
        value={booker.name}
        InputProps={{
          readOnly: true,
        }}
      />
      <TextField
        className={classes.textField}
        variant="outlined"
        fullWidth
        label={t("Phone number")}
        value={booker.phoneNumber}
        InputProps={{
          readOnly: true,
        }}
      />
      <TextField
        className={classes.textField}
        variant="outlined"
        fullWidth
        label={t("Email")}
        value={booker.email}
        InputProps={{
          readOnly: true,
        }}
      />
    </Section>
  );
}

BookerInfo.propTypes = {
  booker: PropTypes.object,
}
