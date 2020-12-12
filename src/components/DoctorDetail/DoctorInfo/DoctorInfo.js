import { Grid, makeStyles, TextField } from "@material-ui/core";
import PropTypes from "prop-types";
import { useTranslation } from "../../../i18n";
import Section from "../../Section";

const doctorProfile = {
  id: 1,
  hisCode: "001",
  name: "Trần Văn A",
  sex: "Nam",
  birthDate: "25/12/1974",
  email: "bs.tva@gmail.com",
  phoneNumber: "0906585245",
  address: "101 Độc Lập, P.Tân Thành, Q.Tân Phú, Tp.HCM",
};

const useStyle = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
  },
  img: {
    width: "100%",
  },
  textField: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

export default function DoctorInfo() {
  const classes = useStyle();
  const { t } = useTranslation();

  return (
    <div>
      <Section title={t("Doctor info")}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={3} md={2}>
            <img
              src="https://via.placeholder.com/150x200"
              alt="profile picture"
              className={classes.img}
            />
          </Grid>
          <Grid item xs={12} sm={9} md={10}>
            <TextField
              className={classes.textField}
              variant="outlined"
              fullWidth
              label={t("Doctor code")}
              value={doctorProfile.hisCode}
              InputProps={{
                readOnly: true,
              }}
            />
            <TextField
              className={classes.textField}
              variant="outlined"
              fullWidth
              label={t("Name")}
              value={doctorProfile.name}
              InputProps={{
                readOnly: true,
              }}
            />
            <TextField
              className={classes.textField}
              variant="outlined"
              fullWidth
              label={t("Sex")}
              value={doctorProfile.sex}
              InputProps={{
                readOnly: true,
              }}
            />
            <TextField
              className={classes.textField}
              variant="outlined"
              fullWidth
              label={t("Birth Date")}
              value={doctorProfile.birthDate}
              InputProps={{
                readOnly: true,
              }}
            />
            <TextField
              className={classes.textField}
              variant="outlined"
              fullWidth
              label={t("Email")}
              value={doctorProfile.email}
              InputProps={{
                readOnly: true,
              }}
            />
            <TextField
              className={classes.textField}
              variant="outlined"
              fullWidth
              label={t("Phone number")}
              value={doctorProfile.phoneNumber}
              InputProps={{
                readOnly: true,
              }}
            />
            <TextField
              className={classes.textField}
              variant="outlined"
              fullWidth
              label={t("Address")}
              value={doctorProfile.address}
              InputProps={{
                readOnly: true,
              }}
            />
          </Grid>
        </Grid>
      </Section>
    </div>
  );
}

DoctorInfo.propTypes = {
  doctorProfile: PropTypes.object,
};
