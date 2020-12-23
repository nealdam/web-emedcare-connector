import { makeStyles } from "@material-ui/core";
import PatientAppointmentTable from "../../../../../src/components/PatientAppointmentTable";
import Section from "../../../../../src/components/Section/Section";
import { defaultPage } from "../../../../../src/hocs/defaultPage";
import { protectRoute } from "../../../../../src/hocs/protectRoute";
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
    <Section title={t("Appointment")}>
      <PatientAppointmentTable />
    </Section>
  )
}

export default protectRoute(defaultPage(CustomerServicePatientAppointmentPage));