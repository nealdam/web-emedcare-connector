import { Fab, makeStyles, Paper, Typography } from "@material-ui/core";
import Schedule from "../../../src/components/Schedule";
import { defaultPage } from "../../../src/hocs/defaultPage";
import { useTranslation } from "../../../src/i18n";
import BackToTopIcon from "@material-ui/icons/ArrowUpward";
import SectionTitle from "../../../src/components/SectionTitle";

const useStyle = makeStyles((theme) => ({
  fab: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
    overflowX: "auto"
  }
}));

function CustomerServiceSchedulePage() {
  const { t } = useTranslation();
  const classes = useStyle();

  const handleClickScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Paper className={classes.paper}>
      <SectionTitle title={t("Appointment list")} />
      <Fab
        color="primary"
        aria-label="Back to top"
        className={classes.fab}
        onClick={handleClickScrollToTop}
      >
        <BackToTopIcon />
      </Fab>
      <Schedule />
    </Paper>
  );
}

export default defaultPage(CustomerServiceSchedulePage);
