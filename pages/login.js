import { Avatar, Container, makeStyles, Paper } from "@material-ui/core";
import { LockOutlined } from "@material-ui/icons";
import LoginForm from "../src/components/LoginForm/LoginForm";
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

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlined />
        </Avatar>
        <LoginForm />
      </div>
    </Container>
  )
}

LoginPage.getInitialProps = async () => ({
  namespacesRequired: ['common']
})

export default LoginPage;