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

const request = {
  account: {
    id: 1,
    name: "Nguyen Van A",
    birthDate: "08/10/1997",
    phoneNumber: "0906469459",
  },
  patient: {
    id: 1,
    name: "Nguyen Van A",
    birthDate: "08/10/1997",
    hisCode: "PA001",
  },
};

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

  const { isOpen, handleClose, handleLink } = props;

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
              value={request.account.name}
              InputProps={{
                readOnly: true,
              }}
            />
            <TextField
              className={classes.textField}
              variant="outlined"
              fullWidth
              label={t("Birth date")}
              value={request.account.birthDate}
              InputProps={{
                readOnly: true,
              }}
            />
            <TextField
              className={classes.textField}
              variant="outlined"
              fullWidth
              label={t("Phone number")}
              value={request.account.phoneNumber}
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
              value={request.patient.name}
              InputProps={{
                readOnly: true,
              }}
            />
            <TextField
              className={classes.textField}
              variant="outlined"
              fullWidth
              label={t("Birth date")}
              value={request.patient.birthDate}
              InputProps={{
                readOnly: true,
              }}
            />
            <TextField
              className={classes.textField}
              variant="outlined"
              fullWidth
              label={t("Patient code")}
              value={request.patient.hisCode}
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
  isOpen: PropTypes.bool,
  handleClose: PropTypes.func,
  handleLink: PropTypes.func,
};
