import { Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import RoomInfo from './RoomInfo';
import RoomSpecialist from './RoomSpecialist';

const roomInfo = {
  id: 1,
  hisCode: "R001",
  number: "001",
  name: "Nhi",
  facility: "CS1"
}

const roomSpecialists = [
  "Nhi",
  "Tai, mũi, họng",
  "Chấn thương chỉnh hình"
]

export default function RoomDetail(props) {


  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <RoomInfo roomInfo={roomInfo} />
      </Grid>
      <Grid item xs={12}>
        <RoomSpecialist roomSpecialists={roomSpecialists} />
      </Grid>
    </Grid>
  )
}

RoomDetail.propTypes = {
  roomInfo: PropTypes.object,
  roomSpecialist: PropTypes.arrayOf(PropTypes.string),
}