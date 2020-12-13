import { Grid, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import DoctorIcon from '../../../constants/icons/DoctorIcon';

export default function DoctorCell(props) {

  const { name, code } = props;

  return (
    <Grid container spacing={2}>
      <Grid item xs={2}>
        <DoctorIcon />
      </Grid>
      <Grid item xs={10}>
        <Typography variant="body1">{name}</Typography>
      </Grid>
      <Grid item xs={2}>
      <Typography variant="body1">#</Typography>
      </Grid>
      <Grid item xs={10}>
      <Typography variant="body1">{code}</Typography>
      </Grid>
    </Grid>
  )
}

DoctorCell.propTypes = {
  name: PropTypes.string,
  code: PropTypes.string,
}