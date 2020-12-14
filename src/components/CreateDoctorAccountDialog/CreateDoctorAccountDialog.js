import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  makeStyles,
  TextField,
} from "@material-ui/core";
import { blue } from "@material-ui/core/colors";
import PropTypes from "prop-types";
import { useTranslation } from "../../i18n";

const useStyles = makeStyles((theme) => ({
  textField: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  }
}))

export default function CreateDoctorAccountDialog(props) {
  const { open = false, setOpen, handleCreateAccount } = props;
  const { t } = useTranslation();
  const classes = useStyles();

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{t("Create doctor account")}</DialogTitle>
      <DialogContent>
        <TextField
          className={classes.textField}
          variant="outlined"
          autoFocus
          label={t("Username")}
          fullWidth
          placeholder={t("Username")}
        />
        <TextField
          className={classes.textField}
          variant="outlined"
          label={t("Password")}
          type="password"
          fullWidth
          placeholder={t("Password")}
        />
        <TextField
          className={classes.textField}
          variant="outlined"
          label={t("Confirm password")}
          type="password"
          fullWidth
          placeholder={t("Confirm password")}
        />
      </DialogContent>
      <DialogActions>
        <Button color="primary" onClick={handleCreateAccount}>
          {t("Create")}
        </Button>
        <Button color="secondary" onClick={handleClose}>
          {t("Close")}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

CreateDoctorAccountDialog.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
  handleCreateAccount: PropTypes.func,
};
