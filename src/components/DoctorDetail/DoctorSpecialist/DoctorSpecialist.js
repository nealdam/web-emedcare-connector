import { Chip, makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import { useTranslation } from '../../../i18n';
import Section from '../../Section';

const doctorSpecialists = ["Tai, mũi, họng", "Chấn thương chỉnh hình"]

const useStyle = makeStyles((theme) => ({
  chip: {
    marginRight: theme.spacing(1)
  }
}))

export default function DoctorSpecialist() {

  const classes = useStyle();
  const {t} = useTranslation();

  return (
    <Section title={t("Specialist")}>
      {doctorSpecialists.map((specialist, index) => (
        <Chip className={classes.chip} key={index} label={specialist} />
      ))}
    </Section>
  )
}

DoctorSpecialist.propTypes = {
  doctorSpecialists: PropTypes.arrayOf(PropTypes.string),
}