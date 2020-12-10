import { Typography } from "@material-ui/core";
import PatientTable from "../../../src/components/PatientTable";
import { defaultPage } from "../../../src/hocs/defaultPage";
import { useTranslation } from "../../../src/i18n";

function CustomerServicePatientPage() {

  const {t} = useTranslation();

  return (
    <div>
      {/* <Typography variant="h4" component="p">
        {t("Patient")}
      </Typography> */}
      <PatientTable />
    </div>
  );
}

export default defaultPage(CustomerServicePatientPage);
