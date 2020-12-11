import { makeStyles, Paper } from "@material-ui/core";
import PatientAppointmentTable from "../../../../../src/components/PatientAppointmentTable"
import SectionTitle from "../../../../../src/components/SectionTitle";
import { defaultPage } from "../../../../../src/hocs/defaultPage"
import { useTranslation } from "../../../../../src/i18n";

const useStyle = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2)
  }
}))

function CustomerServicePatientAppointmentPage() {

  const classes = useStyle();
  const {t} = useTranslation();

  return (
    <Paper className={classes.paper}>
      <SectionTitle title={t("Appointment")} />
      <PatientAppointmentTable />
    </Paper>
  )
}

export default defaultPage(CustomerServicePatientAppointmentPage);