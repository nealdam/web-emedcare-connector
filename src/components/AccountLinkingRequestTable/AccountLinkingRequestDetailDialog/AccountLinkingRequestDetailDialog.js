import {
  AppBar,
  Button,
  Dialog,
  DialogActions,
  Grid,
  IconButton,
  makeStyles,
  Slide,
  TextField,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { Close } from "@material-ui/icons";
import { useTranslation } from "../../../i18n";
import PropTypes from "prop-types";
import { forwardRef } from "react";
import Section from "../../Section/Section";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  textField: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  container: {
    padding: theme.spacing(2),
  },
}));

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AccountLinkingRequestDetailDialog(props) {
  const classes = useStyles();
  const { t } = useTranslation();

  const {
    isLoading,
    isError,
    account,
    patient,
    isOpen,
    handleClose,
    handleLink,
  } = props;

  return (
    <Dialog
      fullScreen
      open={isOpen}
      onClose={handleClose}
      TransitionComponent={Transition}
    >
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
          >
            <Close />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {t("Account linking request detail")}
          </Typography>
        </Toolbar>
      </AppBar>

      <Grid container spacing={2} className={classes.container}>
        <Grid item xs={12}>
          <Button fullWidth variant="contained" color="primary">
            {t("Link")}
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <Section title={t("Account")}>
            <TextField
              className={classes.textField}
              variant="outlined"
              fullWidth
              label={t("Name")}
              InputProps={{
                readOnly: true,
              }}
              value={account && account.name}
            />
            <TextField
              className={classes.textField}
              variant="outlined"
              fullWidth
              label={t("Birth date")}
              value={account && account.birthDate}
              InputProps={{
                readOnly: true,
              }}
            />
            <TextField
              className={classes.textField}
              variant="outlined"
              fullWidth
              label={t("Phone number")}
              value={account && account.phoneNumber}
              InputProps={{
                readOnly: true,
              }}
            />
          </Section>
        </Grid>
        <Grid item xs={12} md={6}>
          <Section title={t("Medical record")}>
            <TextField
              className={classes.textField}
              variant="outlined"
              fullWidth
              label={t("Name")}
              value={patient && patient.name}
              InputProps={{
                readOnly: true,
              }}
            />
            <TextField
              className={classes.textField}
              variant="outlined"
              fullWidth
              label={t("Birth date")}
              value={patient && patient.birthDate}
              InputProps={{
                readOnly: true,
              }}
            />
            <TextField
              className={classes.textField}
              variant="outlined"
              fullWidth
              label={t("Patient code")}
              value={patient && patient.hisCode}
              InputProps={{
                readOnly: true,
              }}
            />
          </Section>
        </Grid>
      </Grid>

      {/* <DialogActions>
        <Button>
          Link
        </Button>
      </DialogActions> */}
    </Dialog>
  );
}

AccountLinkingRequestDetailDialog.propTypes = {
  isLoading: PropTypes.bool,
  isError: PropTypes.object,
  account: PropTypes.object,
  patient: PropTypes.object,
  isOpen: PropTypes.bool,
  handleClose: PropTypes.func,
  handleLink: PropTypes.func,
};
