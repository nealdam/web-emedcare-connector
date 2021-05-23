import PropTypes from 'prop-types'
import { Button, Grid, makeStyles } from "@material-ui/core";
import { useTranslation } from "../../i18n";

const useStyles = makeStyles((theme) => ({
  button:{
    marginLeft: theme.spacing(1),
  },
  container: {
    marginBottom: theme.spacing(2),
  }
}))

export default function RoomAction(props) {
  const classes = useStyles();
  const { handleClickEdit } = props;
  const { t } = useTranslation();

  return (
    <Grid container justify="flex-end" className={classes.container}>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        disabled={!handleClickEdit}
        onClick={handleClickEdit}
      >
        {t("Edit")}
      </Button>
    </Grid>
  )
}

RoomAction.propTypes = {
  handleClickEdit: PropTypes.func,
}