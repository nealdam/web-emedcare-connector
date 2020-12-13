import { Chip } from "@material-ui/core";
import { green, red } from "@material-ui/core/colors";
import PropTypes from "prop-types";

export default function RoomStatus(props) {
  const { status } = props;

  return status == "Open" ? (
    <Chip
      color="primary"
      style={{ backgroundColor: green[500] }}
      label={status}
    />
  ) : status == "Close" ? (
    <Chip
      color="primary"
      style={{ backgroundColor: red[500] }}
      label={status}
    />
  ) : (
    <Chip color="default" label={status} />
  );
}

RoomStatus.propTypes = {
  status: PropTypes.string,
};
