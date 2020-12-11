import { makeStyles, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyle = makeStyles((theme) => ({
  title: {
    marginBottom: theme.spacing(2),
  }
}))

export default function SectionTitle(props) {

  const classes = useStyle();
  const { title } = props;


  return (
    <Typography variant="h4" component="p" className={classes.title} >
      {title}
    </Typography>
  )
}

SectionTitle.propTypes = {
  title: PropTypes.string,
}