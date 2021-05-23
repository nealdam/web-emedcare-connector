import { Chip, makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import { useTranslation } from '../../../i18n';
import Section from '../../Section';

const useStyle = makeStyles((theme) => ({
  chip: {
    marginRight: theme.spacing(1)
  }
}))

export default function DoctorSpecialist(props) {

  const classes = useStyle();
  const {t} = useTranslation();

  const { specialties } = props;

  return (
    <Section title={t("Specialist")}>
      {specialties.map((specialist, index) => (
        <Chip className={classes.chip} key={index} label={specialist.name} />
      ))}
    </Section>
  )
}

DoctorSpecialist.propTypes = {
  specialties: PropTypes.arrayOf(PropTypes.string),
}