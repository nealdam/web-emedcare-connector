import { makeStyles } from "@material-ui/core";
import PatientTable from "../../../src/components/PatientTable";
import { defaultPage } from "../../../src/hocs/defaultPage";
import { useTranslation } from "../../../src/i18n";

const useStyle = makeStyles((theme) => ({}));

function CustomerServicePatientPage() {
  const classes = useStyle();
  const { t } = useTranslation();

  return <PatientTable />;
}

export default defaultPage(CustomerServicePatientPage);
