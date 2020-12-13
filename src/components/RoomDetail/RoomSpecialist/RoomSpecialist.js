import { useTranslation } from "../../../i18n";
import Section from "../../Section";
import PropTypes from 'prop-types';
import { Chip, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  chip: {
    marginRight: theme.spacing(1),
  }
}))

export default function RoomSpecialist(props) {

  const { t } = useTranslation();
  const { roomSpecialists } = props;
  const classes = useStyles();

  return (
    <Section title={t("Room specialist")}>
      {roomSpecialists.map((specialist) => (
        <Chip className={classes.chip} label={specialist} />
      ))}
    </Section>
  )
}

RoomSpecialist.propTypes = {
  roomSpecialists: PropTypes.arrayOf(PropTypes.string),
}