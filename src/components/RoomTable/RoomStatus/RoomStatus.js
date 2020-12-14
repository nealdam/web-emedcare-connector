import { Chip } from "@material-ui/core";
import { green, red } from "@material-ui/core/colors";
import PropTypes from "prop-types";
import { useTranslation } from "../../../i18n";

export default function RoomStatus(props) {
  const { status } = props;
  const { t } = useTranslation();

  return status == "Open" ? (
    <Chip
      color="primary"
      style={{ backgroundColor: green[500] }}
      label={t("Open")}
    />
  ) : status == "Close" ? (
    <Chip
      color="primary"
      style={{ backgroundColor: red[500] }}
      label={t("Close")}
    />
  ) : (
    <Chip color="default" label={status} />
  );
}

RoomStatus.propTypes = {
  status: PropTypes.string,
};
