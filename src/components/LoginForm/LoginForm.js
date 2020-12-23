import {
  Avatar,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  Link,
  makeStyles,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import { Smartphone } from "@material-ui/icons";
import { useState } from "react";
import GoogleIcon from "../../constants/icons/GoogleIcon";
import { useTranslation } from "../../i18n";

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
    "&:hover": {
      backgroundColor: theme.palette.primary.dark
    }
  },
}));

function LoginForm(props) {
  const classes = useStyles();

  const { t } = useTranslation();

  const { handleGoogleLoginClick, handleLoginClick } = props;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form className={classes.form} noValidate>
      <FormControl required variant="outlined" fullWidth>
        <InputLabel>{t("Facility")}</InputLabel>
        <Select native label={t("Facility")}>
          <option value={0}>Bình Dương</option>
          <option value={1}>Long An</option>
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
        value={email}
        onChange={(e) => setEmail(e.target.value)}
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
        value={password}
        onChange={(e) => setPassword(e.target.value)}
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
        onClick={(e) => {e.preventDefault();handleLoginClick(email, password)}}
      >
        {t("Sign in")}
      </Button>
      <Button
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
        onClick={handleGoogleLoginClick}
        startIcon={<GoogleIcon />}
      >
        {t("Continue with Google")}
      </Button>
      <Button
        fullWidth
        variant="contained"
        color="primary"
        disabled
        className={classes.submit}
        startIcon={<Smartphone />}
      >
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
