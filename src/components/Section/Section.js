import { makeStyles, Paper } from "@material-ui/core";
import PropTypes from "prop-types";
import SectionTitle from "./SectionTitle/SectionTitle";


const useStyle = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
  },
}));

export default function Section(props) {
  const classes = useStyle();
  const { title } = props;

  return (
    <Paper className={classes.paper}>
      {title && <SectionTitle title={title} />}
      {props.children}
    </Paper>
  );
}

Section.propTypes = {
  title: PropTypes.string,
};
