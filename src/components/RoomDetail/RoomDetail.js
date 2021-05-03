import { Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import { useTranslation } from '../../i18n';
import RoomInfo from './RoomInfo';
import RoomSpecialist from './RoomSpecialist';

export default function RoomDetail(props) {
  const { t } = useTranslation();

  const { room, isLoading, isError } = props;

  if (isLoading) return <div>{t("Loading")}</div>
  if (isError) return <div>{t("Error")}</div>

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <RoomInfo room={room} />
      </Grid>
      <Grid item xs={12}>
        <RoomSpecialist specialties={room.specialties} />
      </Grid>
    </Grid>
  )
}

RoomDetail.propTypes = {
  room: PropTypes.object,
}