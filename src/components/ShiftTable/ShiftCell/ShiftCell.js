import { Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import { AccessTime, MeetingRoom } from "@material-ui/icons";
import PropTypes from "prop-types";
import NurseIcon from "../../../constants/icons/NurseIcon";
import clsx from 'clsx'

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(1),
  },
}));

export default function ShiftCell(props) {
  const { shift, className, onClick } = props;
  const classes = useStyles();

  return (
    <Grid className={clsx(classes.container, className)} container component={Paper} spacing={1} elevation={3} onClick={onClick}>
      <Grid item xs={2}>
        <AccessTime />
      </Grid>
      <Grid item xs={10}>
        <Typography variant="body1">{shift.time}</Typography>
      </Grid>
      <Grid item xs={2}>
        <NurseIcon />
      </Grid>
      <Grid item xs={10}>
        <Typography variant="body1">Nguyễn Thị B</Typography>
      </Grid>
      <Grid item xs={2}>
        <MeetingRoom />
      </Grid>
      <Grid item xs={10}>
        <Typography variant="body1">P001</Typography>
      </Grid>
    </Grid>
  );
}

ShiftCell.propTypes = {
  shift: PropTypes.object,
};
