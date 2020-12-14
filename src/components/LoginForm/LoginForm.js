import { Avatar, Button, Checkbox, FormControl, FormControlLabel, Grid, InputLabel, Link, makeStyles, MenuItem, Select, TextField } from "@material-ui/core";
import { Smartphone } from "@material-ui/icons";
import { useTranslation } from '../../i18n';

const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(1, 0, 1),
  },
  icon: {
    backgroundColor: theme.palette.primary.main,
  }
}));

function LoginForm() {
  const classes = useStyles();

  const {t} = useTranslation();

  return (
    <form className={classes.form} noValidate>
      <FormControl required variant="outlined" fullWidth>
        <InputLabel>{t("Facility")}</InputLabel>
        <Select
          native
          label={t("Facility")}
        >
          <option value={0}>
            Bình Dương
          </option>
          <option value={1}>
            Long An
          </option>
        </Select>
      </FormControl>
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="username"
        label={t("Username")}
        name="username"
        autoComplete="username"
        autoFocus
      />
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name="password"
        label={t("Password")}
        type="password"
        id="password"
        autoComplete="current-password"
      />
      <FormControlLabel
        control={<Checkbox value="remember" color="primary" />}
        label={t("Remember me")}
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
      >
        {t("Sign in")}
      </Button>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
      >
        <Avatar variant="square" className={classes.icon}>
          G
        </Avatar>
        {t("Continue with Google")}
      </Button>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
      >
        <Avatar variant="square" className={classes.icon}>
          <Smartphone />
        </Avatar>
        {t("Continue with phone number")}
      </Button>
      <Grid container>
        <Grid item xs>
          <Link href="#" variant="body2">
            {t("Forgot password")}?
          </Link>
        </Grid>
      </Grid>
    </form>
  );
}

export default LoginForm;
