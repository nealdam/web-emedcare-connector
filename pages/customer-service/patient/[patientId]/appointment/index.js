import { makeStyles } from "@material-ui/core";
import { useRouter } from "next/router";
import PatientAppointmentTable from "../../../../../src/components/PatientAppointmentTable";
import Section from "../../../../../src/components/Section/Section";
import { defaultPage } from "../../../../../src/hocs/defaultPage";
import { protectRoute } from "../../../../../src/hocs/protectRoute";
import { usePatientAppointment } from "../../../../../src/hooks/patientHooks";
import { useTranslation } from "../../../../../src/i18n";

const useStyle = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2)
  }
}))

function CustomerServicePatientAppointmentPage() {
  const router = useRouter();
  const { patientId } = router.query;
  const classes = useStyle();
  const {t} = useTranslation();

  const { data: patient, isLoading, isError } = usePatientAppointment(patientId);

  return (
    <Section title={t("Appointment")}>
      <PatientAppointmentTable patient={patient} isLoading={isLoading} isError={isError} />
    </Section>
  )
}

export default protectRoute(defaultPage(CustomerServicePatientAppointmentPage));