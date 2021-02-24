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
  const { room } = props;

  return (
    <Section title={t("Room info")}>
      <TextField
        className={classes.textField}
        variant="outlined"
        fullWidth
        label={t("Room code")}
        value={room.hisCode}
        InputProps={{
          readOnly: true,
        }}
      />
      <TextField
        className={classes.textField}
        variant="outlined"
        fullWidth
        label={t("Room number")}
        value={room.number}
        InputProps={{
          readOnly: true,
        }}
      />
      <TextField
        className={classes.textField}
        variant="outlined"
        fullWidth
        label={t("Name")}
        value={room.name}
        InputProps={{
          readOnly: true,
        }}
      />
      <TextField
        className={classes.textField}
        variant="outlined"
        fullWidth
        label={t("Facility")}
        value={room.facility}
        InputProps={{
          readOnly: true,
        }}
      />
    </Section>
  );
}

RoomInfo.propTypes = {
  room: PropTypes.object,
}