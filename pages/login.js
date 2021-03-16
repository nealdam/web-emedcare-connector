import { Avatar, Button, Container, makeStyles, Paper } from "@material-ui/core";
import { LockOutlined } from "@material-ui/icons";
import LoginForm from "../src/components/LoginForm/LoginForm";
import useAuthContext from "../src/contexts/authContext";
import { withTranslation } from "../src/i18n";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  }
}))

function LoginPage() {

  const classes = useStyles();
  const { loggedInUser, authLoading, googleLogin, emailPasswordLogin, serverLogin } = useAuthContext();

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlined />
        </Avatar>
        <LoginForm handleLoginClick={serverLogin} handleGoogleLoginClick={googleLogin} />
      </div>
    </Container>
  )
}

LoginPage.getInitialProps = async () => ({
  namespacesRequired: ['common']
})

export default LoginPage;