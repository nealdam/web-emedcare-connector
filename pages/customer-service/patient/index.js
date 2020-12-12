import { makeStyles, Paper, Typography } from "@material-ui/core";
import PatientTable from "../../../src/components/PatientTable";
import SectionTitle from "../../../src/components/SectionTitle";
import { defaultPage } from "../../../src/hocs/defaultPage";
import { useTranslation } from "../../../src/i18n";

const useStyle = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
  }
}))

function CustomerServicePatientPage() {

  const classes = useStyle();
  const {t} = useTranslation();

  return (
    <Paper className={classes.paper}>
      <SectionTitle title={t("Patient list")} />
      <PatientTable />
    </Paper>
  );
}

export default defaultPage(CustomerServicePatientPage);
