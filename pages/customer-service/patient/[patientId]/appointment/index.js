import { makeStyles } from "@material-ui/core";
import { useRouter } from "next/router";
import { useState } from "react";
import PatientAppointmentTable from "../../../../../src/components/PatientAppointmentTable";
import Section from "../../../../../src/components/Section/Section";
import { DEFAULT_PAGE_SIZE } from "../../../../../src/constants/pagingConstant";
import { defaultPage } from "../../../../../src/hocs/defaultPage";
import { protectRoute } from "../../../../../src/hocs/protectRoute";
import { useAppointmentInfoByPatient } from "../../../../../src/hooks/appointmentHooks";
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

  const [appointmentOffset, setAppointmentOffset] = useState(0);
  const [appointmentLimit, setAppointmentLimit] = useState(DEFAULT_PAGE_SIZE);

  const { data, isLoading, isError } = useAppointmentInfoByPatient(patientId, appointmentOffset, appointmentLimit);

  return (
    <Section title={t("Appointment")}>
      <PatientAppointmentTable appointments={data} isLoading={isLoading} isError={isError} />
    </Section>
  )
}

export default protectRoute(defaultPage(CustomerServicePatientAppointmentPage));