import { makeStyles } from "@material-ui/core";
import useSWR from "swr";
import PatientTable from "../../../src/components/PatientTable";
import { GET_PATIENT_URL } from "../../../src/constants/url";
import { defaultPage } from "../../../src/hocs/defaultPage";
import { protectRoute } from "../../../src/hocs/protectRoute";
import { useTranslation } from "../../../src/i18n";

const useStyle = makeStyles((theme) => ({}));

function CustomerServicePatientPage() {
  const classes = useStyle();
  const { t } = useTranslation();

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return <PatientTable patients={data} />;
}

export default protectRoute(defaultPage(CustomerServicePatientPage));
