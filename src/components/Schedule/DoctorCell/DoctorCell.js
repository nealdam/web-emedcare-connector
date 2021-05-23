import { Grid } from '@material-ui/core';
import PropTypes from 'prop-types'
import { useTranslation } from '../../../i18n';

export default function DoctorCell(props) {

  const {t} = useTranslation();
  const {doctorName = "Doctor Name", roomNumber = "Room Number"} = props;

  return (
    <Grid container direction="column" justify="center" alignItems="center" >
      <Grid item xs={12}>
        {t("Dr.")} {doctorName}
      </Grid>
    </Grid>
  )
}

DoctorCell.propTypes = {
  doctorName: PropTypes.string,
  roomNumber: PropTypes.string
}