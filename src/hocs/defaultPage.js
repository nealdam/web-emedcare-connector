import { CssBaseline, makeStyles } from "@material-ui/core";
import MyAppBar from "../MyAppBar";
import MyDrawer from '../MyDrawer'

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

export function defaultPage(Component) {
  return () => {
    const classes = useStyles();

    return (
      <div className={classes.root}>
        <MyAppBar />
        <MyDrawer />
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Component {...arguments} />
        </main>
      </div>
    );
  };
}
