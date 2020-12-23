import { Fab, makeStyles } from "@material-ui/core";
import BackToTopIcon from "@material-ui/icons/ArrowUpward";
import Schedule from "../../../src/components/Schedule";
import { defaultPage } from "../../../src/hocs/defaultPage";
import { protectRoute } from "../../../src/hocs/protectRoute";
import { useTranslation } from "../../../src/i18n";

const useStyle = makeStyles((theme) => ({
  fab: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

function CustomerServiceSchedulePage() {
  const { t } = useTranslation();
  const classes = useStyle();

  const handleClickScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <Fab
        color="primary"
        aria-label="Back to top"
        className={classes.fab}
        onClick={handleClickScrollToTop}
      >
        <BackToTopIcon />
      </Fab>
      <Schedule />
    </div>
  );
}

export default protectRoute(defaultPage(CustomerServiceSchedulePage));
