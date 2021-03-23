import { TableCell } from "@material-ui/core";
import PropTypes from "prop-types";
import { Fragment } from "react";
import ScheduleCell from "../ScheduleCell";


export default function ScheduleRow(props) {
  const { doctors, currentDateTime } = props;

  console.log("current date time: " + currentDateTime.toISOString());

  return (
    <Fragment>
      {doctors.map((doctor) => (
        <TableCell key={doctor.id}>
          <ScheduleCell doctorId={doctor.id} selectedTime={currentDateTime} />
        </TableCell>
      ))}
    </Fragment>
  );
}

ScheduleRow.propTypes = {
  doctors: PropTypes.array,
  currentDateTime: PropTypes.object,
};
