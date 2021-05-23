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
  const { specialties } = props;
  const classes = useStyles();

  return (
    <Section title={t("Room specialist")}>
      {specialties.map((specialty, index) => (
        <Chip className={classes.chip} key={index} label={specialty.name} />
      ))}
    </Section>
  )
}

RoomSpecialist.propTypes = {
  specialties: PropTypes.arrayOf(PropTypes.object),
}