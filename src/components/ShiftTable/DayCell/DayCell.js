import { Typography } from '@material-ui/core';
import PropTypes from 'prop-types';

export default function DayCell(props) {

  const { day, date } = props

  return (
    <div>
      <Typography variant="h6" component="p">{day}</Typography>
      <Typography variant="body1" component="p">{date}</Typography>
    </div>
  )
}

DayCell.propTypes = {
  day: PropTypes.string,
  date: PropTypes.string,
}