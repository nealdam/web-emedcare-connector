import { Typography } from "@material-ui/core";
import Schedule from "../../../src/components/Schedule";
import { defaultPage } from "../../../src/hocs/defaultPage";
import { useTranslation } from "../../../src/i18n";

function CustomerServiceSchedulePage() {
  const { t } = useTranslation();

  return (
    <div>
      {/* <Typography variant="h4" component="p">
        {t("Schedule")}
      </Typography> */}
      <Schedule />
    </div>
  );
}

export default defaultPage(CustomerServiceSchedulePage);
