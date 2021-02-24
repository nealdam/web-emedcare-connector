import PropTypes from 'prop-types'
import { Grid } from "@material-ui/core";
import AccountDetail from "../AccountDetail";
import DoctorInfo from "./DoctorInfo";
import DoctorSpecialist from "./DoctorSpecialist";

export default function DoctorDetail(props) {

  const { doctor, isLoading, isError } = props;

  if (isLoading) return <div>Loading</div>
  if (isError) return <div>Error</div>

  return (
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <DoctorInfo doctor={doctor} />
        </Grid>
        <Grid item xs={12}>
          <DoctorSpecialist specialties={doctor.specialties} />
        </Grid>
        <Grid item xs={12}>
          <AccountDetail account={doctor.account} />
        </Grid>
      </Grid>
  )
}

DoctorDetail.proptypes = {
  doctor: PropTypes.object,
  isLoading: PropTypes.bool,
  isError: PropTypes.bool,
}