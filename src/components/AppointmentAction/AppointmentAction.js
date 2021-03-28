import PropTypes from "prop-types";
import { Button, Grid, IconButton, makeStyles } from "@material-ui/core";
import moduleName from "@material-ui/icons/";
import { useTranslation } from "../../i18n";

const useStyles = makeStyles((theme) => ({
  button: {
    marginLeft: theme.spacing(1),
  },
  container: {
    marginBottom: theme.spacing(2),
  },
}));

export default function AppointmentAction(props) {
  const classes = useStyles();
  const { handleConfirm, handleFinish, handleCancel } = props;
  const { t } = useTranslation();

  return (
    <Grid container justify="flex-end" className={classes.container}>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        disabled={!handleConfirm}
        onClick={handleConfirm}
      >
        {t("Confirm")}
      </Button>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        disabled={!handleFinish}
        onClick={handleFinish}
      >
        {t("Finish")}
      </Button>
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        disabled={!handleCancel}
        onClick={handleCancel}
      >
        {t("Cancel")}
      </Button>
    </Grid>
  );
}

AppointmentAction.propTypes = {
  handleConfirm: PropTypes.func,
  handleFinish: PropTypes.func,
  handleCancel: PropTypes.func,
};
