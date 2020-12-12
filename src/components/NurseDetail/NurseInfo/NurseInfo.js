import { useTranslation } from "../../../i18n";
import Section from "../../Section";
import PropTypes from "prop-types";
import { Grid, makeStyles, TextField } from "@material-ui/core";

const nurseInfo = {
  hisCode: "001",
  name: "Nguyễn Thị B",
  sex: "Nam",
  birthDate: "13/12/1994",
  phoneNumber: "0908475623",
  address: "184 Độc Lập, P.Tân Thành, Q.Tân Phú, Tp.HCM"
};

const useStyles = makeStyles((theme) => ({
  textField: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  }
}))

export default function NurseInfo(props) {
  const { t } = useTranslation();

  const classes = useStyles();

  return (
    <Section title={t("Nurse info")}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={3} md={2}>
          <img
            src="https://via.placeholder.com/150x200"
            alt="profile picture"
            width="100%"
          />
        </Grid>
        <Grid item xs={12} sm={9} md={10}>
          <TextField
            className={classes.textField}
            variant="outlined"
            fullWidth
            label={t("Nurse code")}
            value={nurseInfo.hisCode}
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            className={classes.textField}
            variant="outlined"
            fullWidth
            label={t("Name")}
            value={nurseInfo.name}
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            className={classes.textField}
            variant="outlined"
            fullWidth
            label={t("Sex")}
            value={nurseInfo.sex}
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            className={classes.textField}
            variant="outlined"
            fullWidth
            label={t("Birth Date")}
            value={nurseInfo.birthDate}
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            className={classes.textField}
            variant="outlined"
            fullWidth
            label={t("Phone number")}
            value={nurseInfo.phoneNumber}
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            className={classes.textField}
            variant="outlined"
            fullWidth
            label={t("Address")}
            value={nurseInfo.address}
            InputProps={{
              readOnly: true,
            }}
          />
        </Grid>
      </Grid>
    </Section>
  );
}

NurseInfo.propTypes = {
  nurseInfo: PropTypes.object,
};
