import { makeStyles } from "@material-ui/core";
import useSWR from "swr";
import PatientTable from "../../../src/components/PatientTable";
import { GET_PATIENT_URL } from "../../../src/constants/url";
import { defaultPage } from "../../../src/hocs/defaultPage";
import { protectRoute } from "../../../src/hocs/protectRoute";
import { usePatient } from "../../../src/hooks/patientHooks";
import { useTranslation } from "../../../src/i18n";

const useStyle = makeStyles((theme) => ({}));

function CustomerServicePatientPage() {
  const classes = useStyle();
  const { t } = useTranslation();

  const { data, paging, isLoading, isError, setOffset, setLimit } = usePatient();

  return <PatientTable patients={data} paging={paging} isLoading={isLoading} isError={isError} setOffset={setOffset} setLimit={setLimit} />;
}

export default protectRoute(defaultPage(CustomerServicePatientPage));
