import { makeStyles, TextField } from "@material-ui/core";
import PropTypes from "prop-types";
import { useTranslation } from "../../i18n";
import Section from "../Section";

const accountDetail = { id: 1, username: "bs.nva", password: "*********", email: "bs.nva@gmail.com", phoneNumber: "0907485623"}

const useStyle = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
  },
  textField: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

export default function AccountDetail() {
  const classes = useStyle();
  const { t } = useTranslation();

  return (
    <Section title={t("Account info")}>

      <TextField
        className={classes.textField}
        variant="outlined"
        fullWidth
        label={t("Username")}
        value={accountDetail.username}
        InputProps={{
          readOnly: true,
        }}
      />
      <TextField
        className={classes.textField}
        variant="outlined"
        fullWidth
        label={t("Password")}
        value={accountDetail.password}
        InputProps={{
          readOnly: true,
        }}
      />
      <TextField
        className={classes.textField}
        variant="outlined"
        fullWidth
        label={t("Email")}
        value={accountDetail.email}
        InputProps={{
          readOnly: true,
        }}
      />
      <TextField
        className={classes.textField}
        variant="outlined"
        fullWidth
        label={t("Phone number")}
        value={accountDetail.phoneNumber}
        InputProps={{
          readOnly: true,
        }}
      />
    </Section>
  );
}

AccountDetail.propTypes = {
  accountDetail: PropTypes.object,
};
