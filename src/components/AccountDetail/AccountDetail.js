import { makeStyles, TextField } from "@material-ui/core";
import PropTypes from "prop-types";
import { useTranslation } from "../../i18n";
import Section from "../Section";

const useStyle = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
  },
  textField: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

export default function AccountDetail(props) {
  const classes = useStyle();
  const { t } = useTranslation();

  const { account } = props;

  return (
    <Section title={t("Account info")}>

      <TextField
        className={classes.textField}
        variant="outlined"
        fullWidth
        label={t("Username")}
        value={account.username}
        InputProps={{
          readOnly: true,
        }}
      />
      <TextField
        className={classes.textField}
        variant="outlined"
        fullWidth
        label={t("Email")}
        value={account.email}
        InputProps={{
          readOnly: true,
        }}
      />
      <TextField
        className={classes.textField}
        variant="outlined"
        fullWidth
        label={t("Phone number")}
        value={account.phoneNumber}
        InputProps={{
          readOnly: true,
        }}
      />
    </Section>
  );
}

AccountDetail.propTypes = {
  account: PropTypes.object,
};
