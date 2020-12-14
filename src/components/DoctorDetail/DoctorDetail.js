import { Grid } from "@material-ui/core";
import AccountDetail from "../AccountDetail";
import DoctorInfo from "./DoctorInfo";
import DoctorSpecialist from "./DoctorSpecialist";

export default function DoctorDetail() {


  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <DoctorInfo />
        </Grid>
        <Grid item xs={12}>
          <DoctorSpecialist />
        </Grid>
        <Grid item xs={12}>
          <AccountDetail />
        </Grid>
      </Grid>
    </div>
  )
}