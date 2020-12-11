import { makeStyles, Paper, TextField } from "@material-ui/core";
import PropTypes from "prop-types";
import { useTranslation } from "../../i18n";
import SectionTitle from "../SectionTitle";

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
    <Paper className={classes.paper}>
      <SectionTitle title={t("Account info")} />

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
    </Paper>
  );
}

AccountDetail.propTypes = {
  accountDetail: PropTypes.object,
};
