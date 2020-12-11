import { Chip, makeStyles, Paper } from '@material-ui/core';
import PropTypes from 'prop-types';
import { useTranslation } from '../../../i18n';
import SectionTitle from '../../SectionTitle';

const doctorSpecialists = ["Tai, mũi, họng", "Chấn thương chỉnh hình"]

const useStyle = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
  },
  chip: {
    marginRight: theme.spacing(1)
  }
}))

export default function DoctorSpecialist() {

  const classes = useStyle();
  const {t} = useTranslation();

  return (
    <Paper className={classes.paper}>
      <SectionTitle title={t("Specialist")} />
      {doctorSpecialists.map((specialist) => (
        <Chip className={classes.chip} label={specialist} />
      ))}
    </Paper>
  )
}

DoctorSpecialist.propTypes = {
  doctorSpecialists: PropTypes.arrayOf(PropTypes.string),
}