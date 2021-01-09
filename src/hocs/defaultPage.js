import { CssBaseline, makeStyles } from "@material-ui/core";
import AppBar from "../components/AppBar";
import Drawer from "../components/Drawer";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
    overflowX: "auto"
  },
}));

export function defaultPage(Component) {
  return () => {
    const classes = useStyles();

    return (
      <div className={classes.root}>
        <AppBar />
        <Drawer />
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Component {...arguments} />
        </main>
      </div>
    );
  };
}
