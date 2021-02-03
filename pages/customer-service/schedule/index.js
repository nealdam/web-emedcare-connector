import { Fab, makeStyles } from "@material-ui/core";
import BackToTopIcon from "@material-ui/icons/ArrowUpward";
import { useState } from "react";
import useSWR from "swr";
import Schedule from "../../../src/components/Schedule";
import { GET_ALL_DOCTORS_APPOINTMENTS } from "../../../src/constants/url";
import fetcher from "../../../src/fetcher";
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

  const [selectedDate, setSelectedDate] = useState(new Date());

  var url = GET_ALL_DOCTORS_APPOINTMENTS + "?date=" + selectedDate.toISOString();

  const { data, error } = useSWR(url, fetcher);

  const handleClickScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

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
      <Schedule doctors={data} selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
    </div>
  );
}

export default protectRoute(defaultPage(CustomerServiceSchedulePage));
