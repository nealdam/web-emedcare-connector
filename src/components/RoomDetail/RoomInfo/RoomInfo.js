import { makeStyles, TextField } from "@material-ui/core";
import { useTranslation } from "../../../i18n";
import Section from "../../Section";
import PropTypes from 'prop-types'

const useStyles = makeStyles((theme) => ({
  textField: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  }
}))

export default function RoomInfo(props) {
  const { t } = useTranslation();
  const classes = useStyles();
  const { roomInfo } = props;

  return (
    <Section title={t("Room info")}>
      <TextField
        className={classes.textField}
        variant="outlined"
        fullWidth
        label={t("Room code")}
        value={roomInfo.hisCode}
        InputProps={{
          readOnly: true,
        }}
      />
      <TextField
        className={classes.textField}
        variant="outlined"
        fullWidth
        label={t("Room number")}
        value={roomInfo.number}
        InputProps={{
          readOnly: true,
        }}
      />
      <TextField
        className={classes.textField}
        variant="outlined"
        fullWidth
        label={t("Name")}
        value={roomInfo.name}
        InputProps={{
          readOnly: true,
        }}
      />
      <TextField
        className={classes.textField}
        variant="outlined"
        fullWidth
        label={t("Facility")}
        value={roomInfo.facility}
        InputProps={{
          readOnly: true,
        }}
      />
    </Section>
  );
}

RoomInfo.propTypes = {
  roomInfo: PropTypes.object,
}